var express = require('express');
var routes = require('./config/routes');

var app = express();

routes(app);

app.listen(8080, ()=>{
  console.log("listening on port 8080");
});
