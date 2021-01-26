function setup() {
  createCanvas(720, 400);
}


function draw() {
  background(0, 45, 150);
  noStroke();

  fill(102, 94, 115)
  triangle(185, 216, 18, 400, 400, 400);
  triangle(481, 257, 18, 400, 800, 400);


  fill(59, 8, 37);
  rect(81, 120, 63, 300);
  rect(500, 160, 63, 300);

  fill(3, 84, 3)
  ellipse(93, 81, 100, 100);
  ellipse(139, 113, 100, 100);
  ellipse(59, 121, 100, 100);
  ellipse(142, 155, 100, 100);
  ellipse(471, 163, 100, 100);
  ellipse(523, 92, 100, 100);
  ellipse(537, 195, 100, 100);
  ellipse(594, 149, 100, 100);
  ellipse(527, 130, 100, 100);

  ellipse(width/2, 400, 800, 100);

  fill(255, 241, 171)
  ellipse(274, 67, 100, 100);

  fill('white')
  text(mouseX + ", " + mouseY, 30, 30);
}

function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
