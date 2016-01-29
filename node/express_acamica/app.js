var express = require('express');
var exphbs  = require('express-handlebars');
var routes = require('./config/routes');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

routes(app);

app.listen(8080, ()=>{
  console.log("listening on port 8080");
});
