const canva = document.querySelector("canvas");
//circle
const circle = canva.getContext("2d");
circle.beginPath();
circle.arc(130, 140, 90, 0, 2 * Math.PI);
circle.stroke();
circle.fillStyle = "#345d7d";
circle.strokeStyle = '#345d7d';
circle.fill();
//oval
const oval = canva.getContext("2d");
oval.beginPath();
oval.ellipse(350, 140, 70, 100, 0, 0, 2 * Math.PI);
oval.fillStyle = "#345d7d";
oval.strokeStyle = '#345d7d';
oval.fill();
oval.stroke();
//square
const square = canva.getContext("2d");
square.fillStyle = '#345d7d';
square.fillRect(490, 75, 150, 150);
//rectangle
const rectangle = canva.getContext("2d");
rectangle.fillStyle = '#345d7d';
rectangle.fillRect(730, 35, 120, 240);
//triangle
const triangle = canva.getContext("2d");
triangle.beginPath();
triangle.moveTo(130, 380);
triangle.lineTo(205, 530);
triangle.lineTo(55, 530);
triangle.closePath();
triangle.fillStyle = '#345d7d';
triangle.fill();
triangle.stroke();
//twoTriangle
const twoTriangle = canva.getContext("2d");
twoTriangle.moveTo(300, 530);
twoTriangle.lineTo(300, 400);
twoTriangle.lineTo(420, 520);
twoTriangle.lineTo(420, 400);
twoTriangle.lineTo(300, 525);
twoTriangle.fillStyle = '#345d7d';
twoTriangle.fill();
twoTriangle.strokeStyle = '#345d7d';
twoTriangle.lineWidth = 5;
//heart
const heart = canva.getContext("2d");
heart.beginPath();
heart.moveTo(560, 380); 
heart.bezierCurveTo(500, 280, 500, 440, 560, 540); 
heart.bezierCurveTo(620, 440, 620, 280, 560, 380); 
heart.fillStyle = '#345d7d'; 
heart.fill();
heart.strokeStyle = '#345d7d'; 
heart.lineWidth = 5; 
heart.stroke();
//halfCircle
const halfCircle = canva.getContext("2d");
halfCircle.beginPath();
halfCircle.arc(780, 490, 60, Math.PI, 0, false);
halfCircle.fillStyle = '#345d7d';
halfCircle.fill(); 
halfCircle.strokeStyle = '#345d7d'; 
halfCircle.lineWidth = 5; 
halfCircle.stroke();
//arrow
const arrow = canva.getContext("2d");
arrow.beginPath();
arrow.moveTo(70, 700);
arrow.lineTo(220, 700); 
arrow.lineTo(150, 680);
arrow.moveTo(220, 700);
arrow.lineTo(150, 720);
arrow.strokeStyle = '#345d7d'; 
arrow.lineWidth = 5;
arrow.stroke(); 
//pentagon
const pentagon = canva.getContext("2d");
pentagon.beginPath();
pentagon.moveTo(360 + 50 * 1.2 * Math.cos(0), 700 + 50 * 1.2 * Math.sin(0));
for (let i = 1; i <= 5; i++) {
    pentagon.lineTo(360 + 50 * 1.2 * Math.cos((Math.PI * 2 / 5) * i), 700 + 50 * 1.2 * Math.sin((Math.PI * 2 / 5) * i));
}
pentagon.closePath();
pentagon.fillStyle = '#345d7d'; 
pentagon.fill(); 
pentagon.strokeStyle = '#345d7d'; 
pentagon.lineWidth = 5;
pentagon.stroke();
//diamond
const diamond = canva.getContext("2d");
diamond.beginPath();
diamond.moveTo(555, 650 - 25 * 1.5); 
diamond.lineTo(580 + 25 * 1.5, 675); 
diamond.lineTo(555, 700 + 50 * 1.5); 
diamond.lineTo(530 - 25 * 1.5, 675);
diamond.closePath();
diamond.fillStyle = '#345d7d'; 
diamond.fill(); 
diamond.strokeStyle = '#345d7d'; 
diamond.lineWidth = 5;
diamond.stroke();
//parallelogram
const parallelogram = canva.getContext("2d");
parallelogram.beginPath();
parallelogram.moveTo(695, 655 - 25 * 0.5);
parallelogram.lineTo(845, 655 - 25 * 0.5); 
parallelogram.lineTo(820, 705 + 50 * 0.5); 
parallelogram.lineTo(670, 705 + 50 * 0.5);
parallelogram.closePath();
parallelogram.fillStyle = '#345d7d'; 
parallelogram.fill(); 
parallelogram.strokeStyle = '#345d7d'; 
parallelogram.lineWidth = 5; 
parallelogram.stroke();