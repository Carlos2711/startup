let ncanvas = document.getElementById("canvassss");
let canvasContext = ncanvas.getContext("2d");
let x = 0;
let y = 0;
let value = 2;

window.onload = function () {
  // let ncanvas = document.getElementById("canvassss");
  // let canvasContext = ncanvas.getContext("2d");
  // let x = 0;
  // let y = 0;
  // let value = 2;
  canvasContext.fillRect(0, 0, 20, 20);

  document.getElementById("moveIt").addEventListener("click", function() {
    requestAnimationFrame(moveit);
  });
}



function moveit(){

  canvasContext.clearRect(0, 0, ncanvas.width, ncanvas.height);
  canvasContext.fillRect(x, y, 20, 20);

  if( x >= 0 ){
    x += value * 2;
    y += value;
    if( x > 400 || y > 300 ) { x = 0; y = 0; }
  }

 requestAnimationFrame(moveit);
}
