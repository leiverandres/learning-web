var http = require("http");
var fs = require("fs");
var url = require("url");
var parser = require("./params_parser.js");
var render_view = require("./render_view.js");

var p = parser.parse;
var render = render_view.render;

http.createServer(function(req, res) {
  fs.readFile("./index.html", function(err, data) {
    if (req.url.indexOf("favicon.ico") > 0) {return;}

    var html_string = data.toString();
    var parametros = p(req);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(render(html_string, parametros));
    res.end();
  })
}).listen(8080);

console.log("waiting request in 8080 port");
