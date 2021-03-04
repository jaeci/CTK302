let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(48);
}

function draw() {
  switch (state) {
    case 0:
      background('red');
      text("Why did the chicken\ncross the road?", width / 2, height / 2);
      break;
    case 1:
      background('green');
      text("to get to the other side", width / 2, height / 2)
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
