let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  //rect(x, 100, 100, 100);
  text("good morning", x, height/2)
  x = x + 1
  //x++; is the same as x=x+1
  // x += 10 is x=x+10

  if (x > width) {
    x = 0;
  }
}
