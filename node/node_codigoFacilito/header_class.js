var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(req, res) {
  fs.readFile("./index.html", function(err, data){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify({nombre: "Leiver Campeón", username: "leiverandres"}));
    res.end();
  })
}).listen(8080);

console.log("waiting request in 8080 port");
