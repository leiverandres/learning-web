function render(html_string, parametros) {
  // var nombre = "";
  var vars = html_string.match(/[^\{\}]+(?=\})/g);
  for (var i = vars.length - 1; i >= 0; i--) {
    html_string = html_string.replace('{'+vars[i]+'}', parametros[vars[i]]);
  }

  return html_string;
}

module.exports.render = render;
