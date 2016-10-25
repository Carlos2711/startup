function loadingfigures(){
  let ncanvas = document.getElementById("canvas");
  let canvasContext = ncanvas.getContext("2d");

  var gradient = canvasContext.createLinearGradient(Math.random(),Math.random(),Math.random(),Math.random());
  gradient.addColorStop("0","magenta");
  gradient.addColorStop("0.5","cyan");
  gradient.addColorStop("1.0","yellow");
  canvasContext.strokeStyle=gradient;
  canvasContext.lineWidth=5;
  canvasContext.strokeRect(Math.random(),Math.random(),Math.random(),Math.random());
  canvasContext.fillStyle = grd;
  canvasContext.fillRect(Math.random(),Math.random(),Math.random(),Math.random());

  canvasContext.beginPath();
  canvasContext.arc(Math.random(),Math.random(),Math.random(),Math.random() * Math.PI);
  canvasContext.fillStyle = "black";
  canvasContext.fill();
  canvasContext.lineWidth = 2;
  canvasContext.strokeStyle = "#003300";
  canvasContext.stroke();

  canvasContext.beginPath();
  canvasContext.moveTo(70,70);
  canvasContext.lineTo(80,70);
  canvasContext.lineTo(70,80);
  canvasContext.fillStyle = "blue";
  canvasContext.fill();
}
