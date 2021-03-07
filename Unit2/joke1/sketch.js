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
      text("Why did the banana\ngo to the doctor?", width / 2, height / 2);
      break;
    case 1:
      background('green');
      text("Because it was not\npeeling well", width / 2, height / 2)
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
