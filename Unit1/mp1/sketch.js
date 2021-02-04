function setup() {
  createCanvas(700, 700);
}


function draw() {
  background(62, 67, 138);
  noStroke();
  //ground
  fill(46, 130, 67);
  ellipse(width / 2, 650, 1200, 400)
  //tree 1
  fill(120, 51, 8);
  quad(93, 535, 13, 545, 54, 193, 92, 190);
  quad(91, 528, 141, 546, 123, 565, 56, 539);
  quad(91, 328, 168, 267, 161, 246, 88, 307);
  quad(161, 271, 228, 261, 222, 241, 164, 249);
  quad(36, 354, 0, 323, 0, 297, 38, 341);
  quad(18, 536, 0, 553, 0, 574, 43, 542);
  //tree 2
  quad(490, 648, 499, 156, 556, 144, 618, 632);
  quad(499, 375, 403, 297, 436, 291, 503, 322);
  quad(562, 228, 608, 156, 624, 163, 574, 312);
  quad(505, 182, 449, 152, 462, 139, 505, 160);

  //leaves tree 1
  fill(39, 102, 55);
  ellipse(183, 243, 170, 55);
  ellipse(0, 292, 150, 55);
  ellipse(43, 213, 190, 70);
  ellipse(88, 156, 144, 55);
  //leaves tree 2
  ellipse(411, 274, 170, 55);
  ellipse(448, 124, 170, 55);
  ellipse(612, 150, 170, 55);
  ellipse(546, 81, 170, 55);

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


  if (mouseIsPressed) {
    fill('black');
    ellipse(300, 430, 15, 15);
    ellipse(347, 432, 15, 15);
    fill('white');
    ellipse(299,427,5,5);
    ellipse(304,430,3,3);
    ellipse(348,429,5,5);
    ellipse(343,432,3,3);
    //flower
    fill(224, 119, 137);
    ellipse(191,141,60,60);
    ellipse(174,100,60,60);
    ellipse(211,74,60,60);
    ellipse(256,103, 60,60);
    ellipse(240,144,60,60);
    //flower center
    fill('white')
    ellipse(212,111,40,40);

  } else {

    //eyes
    stroke('black');
    strokeWeight(2.5);
    line(291, 424, 302, 430);
    line(302, 430, 291, 433);
    line(355, 427, 341, 431);
    line(341, 431, 353, 436);

    //flowers
    noStroke();
    fill(224, 119, 137);
    ellipse(177, 554, 20, 20);
    ellipse(165, 564, 20, 20);
    ellipse(170, 575, 20, 20);
    ellipse(185, 572, 20, 20);
    ellipse(190, 559, 20, 20);


    ellipse(267, 615, 20, 20);
    ellipse(258, 621, 20, 20);
    ellipse(264, 632, 20, 20);
    ellipse(277, 628, 20, 20);
    ellipse(280, 619, 20, 20);


    //flower centers
    fill('white')
    ellipse(177, 565, 10, 10);
    ellipse(268, 622, 10, 10);

    //tears
    fill(140, 209, 230)
    ellipse(363, 445, 13, 13);
    ellipse(384, 448, 13, 13);
    ellipse(377, 465, 13, 13);
    ellipse(398, 485, 13, 13);
    ellipse(388, 514, 13, 13);
    ellipse(425, 533, 13, 13);
    ellipse(413, 568, 13, 13);
    ellipse(289, 446, 13, 13);
    ellipse(273, 444, 13, 13);
    ellipse(278, 468, 13, 13);
    ellipse(268, 520, 13, 13);
    ellipse(231, 524, 13, 13);
    ellipse(249, 570, 13, 13);
    ellipse(210, 570, 13, 13);
  }


  text(mouseX + ", " + mouseY, 30, 30);
}

function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
