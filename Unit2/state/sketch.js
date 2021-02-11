let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {


  switch (state) {
    case 0:
      background('red');
      text("state 0", 100, 100);
      break;

    case 1:
      background('orange');
      text("state 1", 100, 100);
      break;

    case 2:
      background('yellow');
      text("state 2", 100, 100);
      break;

    case 3:
      background('green');
      text("state 3", 100, 100);
      break;

    case 4:
      background('blue');
      text("state 4", 100, 100);
      break;

    case 5:
      background('purple');
      text("state 5", 100, 100);
      break;

  }


}

function mouseReleased() {
  state++;
  if (state > 5) {
    state = 0;
  }
}
