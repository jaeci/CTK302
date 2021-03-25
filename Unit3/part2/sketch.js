let cars = [];


function setup() {
  createCanvas(500, 500);

  noStroke();
  for (let i = 0; i < 15; i++) {
    cars.push(new Car());
  }

}

function draw() {
  background("black");
  // cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }


}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(5), random(5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);
    this.size = random(50,100);

  }

  // methods


  display() {
    // ellipse(this.pos.x, this.pos.y, this.s);
    fill(this.r, this.g, this.b, this.a);

      textSize(this.size);
      text("mine\ncraft", this.pos.x, this.pos.y);
      // rect(this.pos.x, this.pos.y, this.size, 25);

  }

  move() {
    this.pos.add(this.vel);
    //Loop
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;


  }

}
