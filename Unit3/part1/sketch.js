let cars = [];


function setup() {
  createCanvas(500, 500);

  noStroke();
  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }

}

function draw() {
  background("black");
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <=0){
      cars.splice(i,1);
    }
  }


}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width/2, height - 80);
    this.vel = createVector(random(-0.8, 0.8), random(-10, -5));
    this.r = 255 ;
    this.g = 255 ;
    this.b = 255;
    this.a = random(200, 255);
    // this.size = random(50,100);

  }

  // methods


  display() {
    ellipse(this.pos.x, this.pos.y, 20);
    fill(this.r, this.g, this.b, this.a);
  //   textSize(this.size);
  //   text("swag", this.pos.x, this.pos.y);
  //   // rect(this.pos.x, this.pos.y, this.size, 25);

  }

  move() {
    this.pos.add(this.vel);
    this.a=this.a-5;
  //Loop
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;


  }

}
