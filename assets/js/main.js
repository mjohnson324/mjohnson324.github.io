const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function sizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "red";
  ctx.fillRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = " blue";
  ctx.fillText("Hi", canvas.width / 2, canvas.height / 2);
}

sizeCanvas();

window.addEventListener("resize", sizeCanvas);
