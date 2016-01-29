var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema();
var app = express();

mongoose.connect('mongodb://localhost/fotos');

var userSchemaJSON = {
  email:String,
  password:String
};

var user_schema = new Schema(userSchemaJSON);

var User = mongoose.model('User', user_schema);

app.use('/estatico', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/login', function(req, res) {
  User.find(function(err, doc) {
    if (err) throw err;
    console.log(doc);
    res.render('login');
  });
});

app.post('/users', function(req, res) {
  console.log("password: " + req.body.password);
  console.log("Email: " + req.body.email);
  var user = new User({email: req.body.email, password: req.body.password});
  user.save(function() {
    res.send("Datos Guardados");
  });

  res.send("Recibimos tus datos");
})

app.listen(8080, function() {
  console.log('App listening port 8080');
});
