var express = require('express');
var dodyParser = require('body-parser');
var mongoskin = require('mongoskin');
mongoose.connect('mongodb://localhost:8081/testdatabase')

var app = express();

var db = mongoskin.db('mongodb://@localhost:27017/testdatabase', {safe: true});
var id = mongoskin.helper.toObjectID;

var allowMethods = function(req, res, next) {
  res.header('Access-Control-Allow-Methods', "GET, POST; DELETE; OPTIONS");
};

var allowTokenHeader = function(req, res, next) {
  res.headers('Access-Control-Allow-Methods', 'token');
};

var auth = function(req, res, next) {
  if (req.headers.token === 'password123456789') {
    return next();
  } else {
    return next(new Error('No autorized'));
  }
};

// http://localhost:8080/api/:coleccion/:id

app.param('coleccion', function(req, res, next, coleccion) {
  req.collection = db.collections(coleccion);
});

app.use(bodyParser.urlencode({extended: true}));
app.use(bodyParser.json());
app.use(allowMethods);
app.use(allowTokenHeader);


// POST

app.post('/api/:colecion', auth, function(req, res, next) {
  req.collection.insert(req.body, {}, function(err, result) {
    if (err) return next(err);
    res.send(result);
  });
});

//GET

app.get('/api/:coleccion', auth, function(req, res, next) {
  req.collection.find({}, {limit: 10, sort: [['_id', -1]]}).toArray(function(err, results) {
    if (err) return next(err);
    res.send(results);
  });
});

app.get('/api/:coleccion/:id', auth, function(req, res, next) {
  req.collection.findOne({ _id: id(req.params.id) }, function (err, result) {
    if (err) return next(err);
    res.send(result);
  })
});

//PUT

app.put("/api/:coleccion/:id", auth, function(req, res, next) {
  req.collection.update({ _id: id(req.params.id)},
                        {$set: req.body},
                        {safe: true, multi: false},
                        function(err, result) {
                          if (err) return next(err);
                          res.send((result === 1)? {resultado: 'ok'} : {resultado: 'ko'});
                        });
});

//DELETE

app.delete('/api/:coleccion/:id', auth, function(req, res, next) {
  req.collection.remove({ _id: id(req.params.id)}, function(err, result) {
    if (err) return next(err);
    res.send((result === 1)? {resultado: 'ok'} : {resultado: 'ko'});
  })
})

app.listen(8080, function() {
  console.log('servidor escuchando en el puerto 8080');
})
