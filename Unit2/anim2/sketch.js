let x=-400;

function setup() {
  createCanvas(700, 700);
}


function draw() {
  background(62, 67, 138);

  push();
  translate(x,0);
  avatar();
  pop();
  x += 10
  if (x > width) {
    x = -400;
}
}

function avatar() {

  noStroke();

  //baby fox
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

    //eyes
    stroke('black');
    strokeWeight(2.5);
    line(291, 424, 302, 430);
    line(302, 430, 291, 433);
    line(355, 427, 341, 431);
    line(341, 431, 353, 436);

}
