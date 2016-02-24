var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

function obtenerCurso(req, res, next, id) {
	setTimeout(function() {
      res.curso = 'express';
      next();
	}, 2000);
}

var cursos = express.Router();

cursos.param('id', obtenerCurso);

cursos.get('/:id', obtenerCurso, function(req, res) {
  res.locals.id = req.params.id;
  res.render('curso/ver');
});

cursos.get('/:id/detalles', obtenerCurso, function(req, res) {
  res.locals.id = req.params.id;
  res.render('curso/detalles');
});

app.use('/cursos', cursos);

app.listen(8000, function () {
  console.log("Esperando requests en el puerto 8000");
});
