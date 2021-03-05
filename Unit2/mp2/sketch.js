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
      if (vol > 1.0) {
        state = 2;
      }

      //Image: fox is curled up with their eyes closed, no tears, no flowers
      //I want this volume level to go to the next case to be pretty low, like snapping your fingers

      break;

    case 1:
      image(Tears1, width / 2, height / 2, 900, 1200);
      timer = timer + 1;
      if (timer > 300) {
        timer = 0;
        state = 0;
      if (vol > 1) {
        state = 2;
      }


      //Image: fox with some tears
      //There is some mic input, that's the "forest noises" There are a few tears from the fox
      //I want this volume level to go to the next case to be moderately loud but not too much, maybe like talking slightly above a normal volume
      //This state may be skipped over if the volume level is really loud, but that's okay

      break;

    case 2:
      image(Tears2, width / 2, height / 2, 900, 1200);
      text("pet the fox to calm them", width/2, 1300);
      if ((mouseX > 299) && (mouseX < 627) && (mouseY > 1004) && (mouseY < 1108)) {
        state = 3;
      }

      //Image:Fox with LOTS of tears
      //Louder mic input, MORE tears from the fox, so it's like the louder it gets, the more scared they are
      //Here I'd like -maybe a message at the bottom of the screen like "pet the fox to let them know it'll be okay" and turn the fox into a button and when you click it goes to case 3
      //!!!!! I'd like cases 1 and 2 to be persistent even after the volume input is back to 0, so if you clap your hands really loud, it'll go to case 2 and stay there UNTIL you click the button

      break;
    case 3:
      image(Flowers1, width / 2, height / 2, 900, 1200);
      timer = timer + 1;
      if (timer > 300) {
        timer = 0;
        state = 4;
      }

      //Image:Fox with one eye open and small flower buds around them
      //This is directly after you press the "button" and it's like the fox realizing that there's nothing to be scared of

      break;
    case 4:
      image(Flowers2, width / 2, height / 2, 900, 1200);
      timer = timer + 1;
      if (timer > 400) {
        timer = 0;
        state = 0;
      }

      //Image:Fox with both eyes open, huge flowers around them with sparkles


      break;

  }

}

function touchStarted(){
  getAudioContext().resume();
}
