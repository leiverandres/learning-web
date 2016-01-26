var express = require("express");

var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res) {
  res.render("index", {nombre: "Hola Leiver"});
});

app.post()

app.listen(8080);
