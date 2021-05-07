let cars = [];
let maxCars = 10;
let maxTimer = 12 * 60;
let timer = 0;
let frogPos;
let state = 0;
let song;
let beep;

function preload() {
  song = loadSound("assets/berrysong.m4a");
  beep = loadSound("assets/beep.m4a");

}

function setup() {
  createCanvas(600, 800);
  imageMode(CENTER);


  Home = loadImage("assets/home.png")
  Play = loadImage("assets/play.png")
  Win = loadImage("assets/win.png")
  Lose = loadImage("assets/lose.png")
  Basket = loadImage("assets/basket.png")
  Berry1 = loadImage("assets/berry1.png")
  // Berry2 = loadImage("assets/berry2.png")

  //TOOK THIS OUT
  // song.play();
  // song.loop();

  // Spawn an object

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 200);

}

function draw() {

  switch (state) {
    case 0:
      image(Home, width / 2, height / 2, 600, 800);


      break;
    case 1:
      image(Play, width / 2, height / 2, 600, 800);
      game();
      timer++;
      if (timer > maxTimer) {
        timer = 0;
        state = 3;
      }
      break;
    case 2:
      image(Win, width / 2, height / 2, 600, 800);
      break;
    case 3:
      image(Lose, width / 2, height / 2, 600, 800);
      break;

  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // they won and clicked to restart
      resetTheGame();
      state = 0;
      break;

    case 3: //they lost and clicked to restart
      resetTheGame();
      state = 0;
      break;

  }
}

function resetTheGame() {
  timer = 0;
  cars = [];

  frogPos = createVector(width / 2, height - 200);

  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

}

function game() {



  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      beep.play();
    }

  }

  //check to see if array = 0

  if (cars.length == 0) {
    state = 2;
  }

  checkForKeys();
  image(Basket, frogPos.x, frogPos.y, 100, 100);


}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 8;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 8;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 8;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 8;

  if (frogPos.x > width) frogPos.x = 0;
  if (frogPos.x < 0) frogPos.x = width;
  if (frogPos.y > height) frogPos.y = 0;
  if (frogPos.y < 0) frogPos.y = height;

}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);
  }

  // methods

  display() {

    image(Berry1, this.pos.x, this.pos.y, 50, 50);


  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function touchStarted() {
  getAudioContext().resume();
}
