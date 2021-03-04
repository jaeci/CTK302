let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  rectMode(CENTER);
  textSize(48);
}

function draw() {
  switch (state) {
    case 0:
      background('purple');
      text("Why did the chicken\ncross the road?", width / 2, height / 2, 400, 400);
      break;
    case 1:
      background('blue');
      text("to get to the other side", width / 2, height / 2, 400, 400)
      break;

  }
  timer++;
  if (timer > 3 * 60) {
    state++;
    timer = 0;
    if (state > 1) {
      state = 0;
    }
  }
}
