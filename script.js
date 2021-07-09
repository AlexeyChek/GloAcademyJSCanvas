const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const color = document.getElementById('color');
const brush = document.getElementById('brush');

color.addEventListener('input', () => ctx1.strokeStyle = color.value);
brush.addEventListener('input', () => ctx1.lineWidth = brush.value);

canvas1.addEventListener('mousemove', event => {
  const x = event.offsetX,
  y = event.offsetY,
  mx = event.movementX,
  my = event.movementY;
  
  if(event.buttons > 0) {
    ctx1.beginPath();
    ctx1.moveTo(x, y);
    ctx1.lineTo(x - mx, y - my);
    ctx1.stroke();
    ctx1.closePath();
  }
});


const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

ctx2.lineWidth = 12;

ctx2.beginPath();
ctx2.moveTo(150, 160);
ctx2.arc(90, 160, 60, 0, Math.PI*2, true);
ctx2.strokeStyle = 'rgba(8, 132, 193)';
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(300, 160);
ctx2.arc(240, 160, 60, 0, Math.PI*2, true);
ctx2.strokeStyle = 'rgba(0, 0, 0)';
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(450, 160);
ctx2.arc(390, 160, 60, 0, Math.PI*2, true);
ctx2.strokeStyle = 'rgba(236, 50, 77)';
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(225, 215);
ctx2.arc(165, 215, 60, 0, Math.PI*2, true);
ctx2.strokeStyle = 'rgba(250, 177, 50)';
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(375, 215);
ctx2.arc(315, 215, 60, 0, Math.PI*2, true);
ctx2.strokeStyle = 'rgba(27, 139, 59)';
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(90, 95);
ctx2.arc(90, 160, 60, -Math.PI / 2, 1, false);
ctx2.strokeStyle = 'rgba(8, 132, 193)';
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(240, 95);
ctx2.arc(240, 160, 60, -Math.PI / 2, 1, false);
ctx2.strokeStyle = 'rgba(0, 0, 0)';
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(240, 220);
ctx2.arc(240, 160, 60, Math.PI / 2, Math.PI * 0.7, false);
ctx2.strokeStyle = 'rgba(0, 0, 0)';
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(390, 220);
ctx2.arc(390, 160, 60, Math.PI / 2, Math.PI * 0.7, false);
ctx2.strokeStyle = 'rgba(236, 50, 77)';
ctx2.stroke();
ctx2.closePath();


