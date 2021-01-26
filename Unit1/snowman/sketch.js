function setup() {
  createCanvas(500,500);
}


function draw() {
  background('blue')
  ellipse(width/2, height/2 + 75, 150, 150);
  ellipse(width/2, height/2, 100, 100);
  ellipse(width/2, height/2 - 75, 75, 75);
}
