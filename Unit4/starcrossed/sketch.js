//Gyro
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;
//Particles
var cars = [];
var cars2 = [];
var stars = [];
var frogPos;
var i = 0;
var maxCars = 5;
var maxCars2 = 5;
var maxStars = 25;
//Images
var homeImage;
var howtoImage;
var sparkleImage;
var meteorImage;
var rocketImage;
//Sounds
var song;
var beep;
//Other
var state = 0;
var timer = 0;
var maxTimer = 15 * 60;


//SOUND
function preload() {
  beep = loadSound("assets/beep.m4a");
  song = loadSound("assets/berrysong.m4a");

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  // imageMode(CENTER);
  // textAlign(CENTER);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;


  // spawn a bunch of cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  for (var i = 0; i < maxCars2; i++) {
    cars2.push(new Car2());
  }

  for (var i = 0; i < maxStars; i++) {
    stars.push(new Star());
  }

  // initialize the frog's position
  frogPos = createVector(width / 2, height / 2);

  //PLAY SONG
  song.play();
  song.volume(0.2);
  song.loop();

  // LOAD IMAGES
  Home = loadImage("assets/home.png");
  Howto = loadImage("assets/howto.png");
  Sparkle = loadImage("assets/sparkle2.png");
  Meteor = loadImage("assets/meteor2.png");
  Rocket = loadImage("assets/rocket2.png");

  //Housekeeping
  // imageMode(CENTER);
  // rectMode(CENTER);

}

function draw() {

  switch (state) {
    //HOME
    case 0:
      space();
      // text("HOME", 250, 250);
      image(Home, width / 2, height / 2, 390, 570);
      //HOME IMG HERE
      break;

      //PLAY
    case 1:
      space();
      // text("PLAY", 250, 250);
      game();
      timer++;
      if (timer > maxTimer) {
        state = 0;
        resetGame();
      }
      break;
      //I have this set up so I can add win and lose screens later - They aren't active right now, the player will never see cases 2 and 3
      //WIN
    case 2:
      space();
      text("WIN", 250, 250);
      //IMG HERE
      break;

      //LOSE
    case 3:
      space();
      text("LOSE", 250, 250);
      //IMG HERE
      break;

      //HOW TO
    case 4:
      space();
      image(Howto, width / 2, height / 2, 390, 570);
      // text("HOW TO", 250, 250);
      break;
  }

}

function mouseReleased() {
  switch (state) {
    case 0:
      //START BUTTON
      if ((mouseX > width / 2 - 100) && (mouseX < width / 2 + 100) && (mouseY > height / 2 + 45) && (mouseY < height / 2 + 140)) {
        state = 1;
      }
      //HOW TO BUTTON
      if ((mouseX > width / 2 - 100) && (mouseX < width / 2 + 100) && (mouseY > height / 2 + 150) && (mouseY < height / 2 + 250)) {
        state = 4;
      }
      break;
      //WIN
    case 2:
      resetGame();
      state = 0;
      break;
      //LOSE
    case 3:
      resetGame();
      state = 0;
      break;
      //HOW TO
    case 4:
      //BACK BUTTON
      if ((mouseX > 0) && (mouseX < 250) && (mouseY > 0) && (mouseY < 250)) {
        state = 0;
      }
      break;
  }

}

function resetGame() {
  timer = 0;
  cars = [];
  cars2 = [];

  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  for (var i = 0; i < maxCars2; i++) {
    cars2.push(new Car2());
  }

  frogPos = createVector(width / 2, height / 2);

}

function game() {
  //GRYO
  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;

  xPosition = map(gamma, 0, 25, 0, width);
  yPosition = map(beta, 25, 45, 0, height);


  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // PLACEHOLDER
  // fill('green');
  // ellipse(0, 0, 80, 80);
  image(Rocket, frogPos.x, frogPos.y, 30, 75);
  pop();


  // update the frog's position using the accelerometer data
  frogPos.x = xPosition;
  frogPos.y = yPosition;

  // for (var i = 0; i < cars2.length; i++){
  //   cars2[i].display();
  //   cars2[i].drive();
  //   if (cars2[i].pos.dist(frogPos) < 50){
  //     cars2.splice(i,1)
  //     beep.play();
  //   }
  // }
  //
  //   for (var i = 0; i < cars.length; i++){
  //     cars[i].display();
  //     cars[i].drive();
  //     if (cars[i].pos.dist(frogPos) < 50){
  //       state = 0;
  //     }
  //   }


    //I think this section is incorrect - keeping it for a little bit just in case
  // //METEOR COLLISION - BAD
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 30) {
      cars.splice(i, 1);
      //LOSE
      state = 0;
    }
  }

  // //STAR COLLECT - GOOD
  for (var i = 0; i < cars2.length; i++) {
    cars2[i].display();
    cars2[i].drive();
    if (cars2[i].pos.dist(frogPos) < 30) {
      cars2.splice(i, 1);
      //WIN - MAYBE ADD A SCORE COUNTER?
      beep.play();
    }
  }


  // PAC-MAN LOOP CODE FOR FROG - MIGHT NEED
  if (frogPos.x > width) frogPos.x = 0;
  if (frogPos.x < 0) frogPos.x = width;
  if (frogPos.y > height) frogPos.y = 0;
  if (frogPos.y < 0) frogPos.y = height;


  // Debugging information -- take this out when you're ready for production!
  // Just a bunch of text commands to display data coming in from addEventListeners
  // textAlign(LEFT);
  // textSize(20);
  // fill('white');
  // text("orientation data:", 25, 25);
  // textSize(15);
  // text("alpha: " + alpha, 25, 50);
  // text("beta: " + beta, 25, 70);
  // text("gamma: " + gamma, 25, 90);
  // textSize(20);
  // text("acceleration data:", 25, 125);
  // textSize(15);
  // text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y, 25, 170);
  // text("z = " + z, 25, 190);
}

//THIS SPAWNS MORE SPARKLES
function deviceShaken() {
  // re-spawn cars
  cars2 = []; // clear the array first
  for (var i = 0; i < maxCars2; i++) {
    cars2.push(new Car2());
  }
}

function space() {
  noStroke();
  background('#0C1121'); //dark blue
  //background stars
  fill('#57ABCF'); //light blue
  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
    stars[i].move();
    if (stars[i].a <= 0) {
      stars.splice(i, 1);
    }
  }
}

// METEORS - BAD COLLECTOR
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));


  // methods
  this.display = function() {

    // ADD PNG IMAGE HERE
    //PLACEHOLDER
    // fill('red');
    // ellipse(this.pos.x - 50, this.pos.y, 50, 50);
    image(Meteor, this.pos.x, this.pos.y, 50, 50);

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

// SPARKLES - GOOD COLLECTOR
function Car2() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));


  // methods
  this.display = function() {

    // ADD PNG IMAGE HERE
    //PLACEHOLDER
    // fill('blue');
    // ellipse(this.pos.x - 50, this.pos.y, 50, 50);
    image(Sparkle, this.pos.x, this.pos.y, 30, 40);


  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

// BACKGROUND STARS
class Star {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(windowWidth), random(windowHeight));
    this.vel = createVector(0, 1.5);
    this.a = random(200, 255);

  }

  // methods
  display() {
    //CHANGE OPACITY
    // fill(this.a);
    fill('#57ABCF');
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }

  move() {
    this.pos.add(this.vel);
    // this.a = this.a - 5;
    // Loop
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;


  }
}

// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

//SOUND
function touchStarted() {
  getAudioContext().resume();
}

// COLOR PALETTE HEX: Dark blue #0C1121 --- Light Blue #57ABCF --- Pink #CF57A1
