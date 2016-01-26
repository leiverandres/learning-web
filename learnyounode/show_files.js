module.exports.show_files = function show_files(directory, extension, callback) {
  let ext = ".".concat(extension);
  fs.readdir(directory, callback(err, data));
}
