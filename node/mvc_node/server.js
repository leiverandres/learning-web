var http = require("http");
var fs = require("fs");
var url = require("url");
var saludador = require("./models/saludador");

var server = http.createServer(function(req, res) {
  var query = url.parse(req.url, true).query;
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("<h1>Hola " + saludador.saludar(query.nombre) + "!</h1>");
}).listen(8080);

console.log("waiting request in 8080 port");
