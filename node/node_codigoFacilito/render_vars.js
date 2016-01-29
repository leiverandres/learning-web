var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile('./index.html', function(err, data){
    var nombre = 'leiver';
    var html_string = data.toString();
    //expresión reagular que busca en el html donde hay {x}
    var vars = html_string.match(/[^\{\}]+(?=\})/g);
    // vars {'nombre'}
    for (var i = vars.length - 1; i >= 0; i--) {
      // lo ejecutamos como código javascript
      // para obtener el valor de dicha variable
      var value = eval(vars[i]);
      //reemplaza el contenido {x} por su valor correspondiente
      html_string = html_string.replace('{'+vars[i]+'}', value);
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html_string);
    res.end();
  });
}).listen(8080);
