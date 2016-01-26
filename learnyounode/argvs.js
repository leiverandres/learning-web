const n = process.argv.length;
var ans = 0;
if (n > 1) {
  for (var i = 2; i < n; ++i) {
    ans = ans + Number(process.argv[i]);
  }
}

console.log(ans);

// console.log(process.argv);
