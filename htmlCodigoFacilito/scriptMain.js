$(document).on("ready", configApp);

function configApp() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  canvas.width = screen.availWidth;
  drawFooter(canvas, ctx);
}

function drawFooter(canvas, context) {
  context.fillStyle = "rgba(0,0,0,0.8)";
  context.moveTo(0,0);
  context.quadraticCurveTo(0, -50, canvas.width-100, canvas.height-50)
  context.fill();
  context.stroke();
}
