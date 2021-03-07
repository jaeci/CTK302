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
      text("Why do bicycles\nfall over?", width / 2, height / 2, 400, 400);
      break;
    case 1:
      background('blue');
      text("Because they're two tired", width / 2, height / 2, 400, 400)
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
