function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}


function draw() {
  background(0, 45, 150);
  noStroke();
  // stroke('blue')
  // strokeWeight(4);

  //fill("green");
  // triangle(18, 18, 18, 360, 81, 360);

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


  //   fill(204);
  //   quad(189, 18, 216, 18, 216, 360, 144, 360);

  //   fill(255);
  //   ellipse(252, 144, 72, 72);

  //   fill(204);
  //   triangle(288, 18, 351, 360, 288, 360);

  //   fill(255);
  //   arc(479, 300, 280, 280, PI, TWO_PI, CHORD);

  fill('white')
  text(mouseX + ", " + mouseY, 30, 30);
}

function mouseReleased() {
  print(mouseX + ", " + mouseY);
}





// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
