const show = require('./show_files.js')
const fs = require('fs');
const path = require('path');
show.show_files(process.argv[2], process.argv[3], function(err, data){
  if (err) throw err;
  return data;
});
