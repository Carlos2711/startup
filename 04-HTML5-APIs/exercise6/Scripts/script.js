let ncanvas = document.getElementById("canvas");
let canvasContext = canvas.getContext("2d");
let x = 0;
let y = 0;
let value = 2;

function moveit(animateFunction){
  canvasContext.clearRect(0, 0, ncanvas.width, ncanvas.height);
  canvasContext.fillRect(x, y, 20, 20);

  if( x >= 0 ){
    x += value * 2;
    y += value;
    if( x > 280 || y > 130 ) { x = 0; y = 0; }
  }

requestAnimationFrame(animateFunction);
}
