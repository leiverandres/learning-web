var io = require("socket.io").listen(6969);
io.sockets.on("connection", arranque);
function arranque(socket) {
  usuario.on("nuevoNombre", emitir);
}

function emitir(data) {
  io.sockets.emit("nombreDesdeElServer", data + "*");
}
