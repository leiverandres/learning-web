var saludador = require('../controllers/saludador_controller');
var index = require('../controllers/home');
module.exports = function(app) {
  app.get('/saludo', saludador.saludo);
  app.get('/despedida', saludador.despedida);  
}
