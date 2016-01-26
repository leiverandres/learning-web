const fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
file = file.toString();
var data = file.split('\n');
console.log(data.length - 1);
