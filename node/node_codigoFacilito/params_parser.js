function parse(req) {
  var params = [];
  var parametros = {};

  if (req.url.indexOf("?") > 0) {
    var url_data = req.url.split("?");
    var params = url_data[1].split("&");
  }

  for (var i = params.length - 1; i >= 0; i--) {
    var parameter = params[i];
    var param_data = parameter.split("=");
    // [nombre,leiver(data)]
    parametros[param_data[0]] = param_data[1];
    //{nombre: leiverdata}
  }

  return parametros;
}

module.exports.parse = parse;
