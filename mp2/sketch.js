let state = 0;
let timer = 0;
var mic;
var vol;

function setup() {
  createCanvas(900, 1200);

  Original = loadImage("assets/original.png")
  Tears1 = loadImage("assets/tears1.png")
  Tears2 = loadImage("assets/tears2.png")
  Flowers1 = loadImage("assets/flowers1.png")
  Flowers2 = loadImage("assets/flowers2.png")

  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  ellipseMode(CENTER);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  background(100);
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1


  switch (state) {
    case 0:
      image(Original, width / 2, height / 2, 900, 1200);
      if (vol > .03) {
        state = 1;
      }
      if (vol > .08) {
        state = 2;
      }

      break;

    case 1:
      image(Tears1, width / 2, height / 2, 900, 1200);
      if (vol > .05) {
        state = 2;
      }

      break;

    case 2:
      image(Tears2, width / 2, height / 2, 900, 1200);
      if ((mouseX > 627, 971) && (mouseX < 299, 1125) && (mouseY > 634, 1108) && (mouseY < 562, 1004)) {
        state++;
        if (state > 4) {
          state = 0;
        }
      }

      break;
    case 3:
      image(Flowers1, width / 2, height / 2, 900, 1200);
      timer = timer + 1;
      if (timer > 200) {
        timer = 0;
        state++;
        if (state > 4) state = 0;
      }

      break;
    case 4:
      image(Flowers2, width / 2, height / 2, 900, 1200);
      timer = timer + 1;
      if (timer > 200) {
        timer = 0;
        state++;
        if (state > 4) state = 0;
      }


      break;

  }

}

// function mouseReleased() {
//   state++;
//   if (state > 2) state = 0;
// }

//
// function mouseReleased() {
//   print(mouseX + ", " + mouseY);
// }



// }
