const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function sizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "rgba(42, 44, 162)";
  ctx.fillRect(0,0, canvas.width, canvas.height);
}

sizeCanvas();

window.addEventListener("resize", sizeCanvas);
