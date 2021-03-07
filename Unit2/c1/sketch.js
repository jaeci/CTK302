var mic;
var vol;
var c = 'green';
let x = -400;

function setup() {
  createCanvas(800, 800);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}


function draw() {
  background(c);

  // get the sound input
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .05) { // if the volume is LOUD?
    // do something

    //  c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color

    x = x + 5;
    if (x > width) {
      x = -400;
    }
  }

  push();
  translate(x, 0);
  avatar();
  pop();

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}

function avatar() {

  //baby fox
  noStroke();
  //body
  fill(222, 130, 31);
  quad(308, 460, 348, 461, 384, 585, 286, 591);
  //tail
  quad(401, 481, 444, 477, 442, 520, 363, 575);
  //white fur
  fill('white');
  quad(316, 462, 337, 462, 347, 533, 319, 540);
  triangle(317, 463, 290, 430, 270, 439);
  triangle(337, 464, 357, 434, 377, 445);
  triangle(442, 520, 401, 481, 444, 477)

  //face
  fill(222, 130, 31);
  triangle(250, 393, 388, 401, 328, 476);
  //ears
  triangle(250, 393, 266, 357, 294, 397);
  triangle(343, 401, 372, 361, 388, 401);
  //cheeks
  triangle(250, 393, 270, 439, 293, 432);
  triangle(353, 434, 388, 401, 378, 445);
  //nose
  fill('black');
  ellipse(328, 472, 10, 10);
  fill('black');
  ellipse(300, 430, 15, 15);
  ellipse(347, 432, 15, 15);
  fill('white');
  ellipse(299, 427, 5, 5);
  ellipse(304, 430, 3, 3);
  ellipse(348, 429, 5, 5);
  ellipse(343, 432, 3, 3);

}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
