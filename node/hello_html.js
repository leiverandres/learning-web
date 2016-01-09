var http = require('http');
var fs = require('fs');

fs.readFile("./index.html", function(err, data){//data = index.html
  if(err) throw err;

  var server = http.createServer(function(req, res){
    console.log(req.url);
    if(req.url === '/'){
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data);
    } else if(req.url === "/img/logo.png"){//example reques img
      res.writeHead(200, {"Content-Type": "image/png"});
      res.end(data);
    } else {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.end("<h1>Pagina no encontrada</h1>");
    }
  }).listen(8080);
});

/*

var html = fs.readFile("./index.html");
http.createServer(function(req, res){
  res.write(html);
  res.end();
}).listen(8080);
*/
