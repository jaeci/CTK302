let state = 0;
let timer = 0;
var mic;
var vol;

function setup() {
  createCanvas(600, 800);

  Original = loadImage("assets/original.jpg")
  Tears1 = loadImage("assets/tears1.jpg")
  Tears2 = loadImage("assets/tears2.jpg")
  Flowers1 = loadImage("assets/flowers1.jpg")
  Flowers2 = loadImage("assets/flowers2.jpg")

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
      image(Original, width / 2, height / 2, 600, 800);
      if (vol > .3) {
        state = 1;
      }
      if (vol > .8) {
        state = 2;
      }

      //Image: fox is curled up with their eyes closed, no tears, no flowers

      break;

    case 1:
      image(Tears1, width / 2, height / 2, 600, 800);

      // if (vol > 1.0) {
      //   state = 2;
      // }

      timer++;

      if (timer > 200) {
        timer = 0;
        state = 0;
      }

      if (vol > .8) {
        state = 2;
      }


      //Image: fox with some tears
      //There is some mic input, that's the "forest noises" There are a few tears from the fox
      //This state may be skipped over if the volume level is loud, but that's okay

      break;

    case 2:
      image(Tears2, width / 2, height / 2, 600, 800);

      timer++;

      if (timer > 350) {
        timer = 0;
        state = 0;
      }

      fill('white');
      text("pet the fox to calm them", width / 2 + 30, 780);
      if ((mouseX > 214) && (mouseX < 409) && (mouseY > 665) && (mouseY < 753)) {
        state = 3;
        timer = 0;
      }

      //Image:Fox with LOTS of tears, very scared
      //I've turned the fox into a button and when you "pet" by hovering over them, it goes to case 3

      break;
    case 3:
      image(Flowers1, width / 2, height / 2, 600, 800);
      timer = timer + 1;
      if (timer > 200) {
        timer = 0;
        state = 4;
      }

      //Image:Fox with one eye open and small flower buds around them
      //This ONLY activates after the button is interacted with

      break;
    case 4:
      image(Flowers2, width / 2, height / 2, 600, 800);
      timer = timer + 1;
      if (timer > 400) {
        timer = 0;
        state = 0;
      }

      //Image:Fox with both eyes open, huge flowers around them with sparkles


      break;

  }

}

function touchStarted() {
  getAudioContext().resume();
}

function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
