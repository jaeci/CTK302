var bubbles = [];
// IMAGES
let poppyImage;
let branchImage;
let bridgetImage;
let cloudImage;
let cooperImage;
let diamondImage;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  // let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1SaVGzyHmeb2TrRge4upJKVV41ZeIxrSUmdBqz7Qg2Wk';
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff

  //Images
  Poppy = loadImage("assets/poppy.png");
  Branch = loadImage("assets/branch.webp");
  Bridget = loadImage("assets/bridget.webp");
  Cloud = loadImage("assets/cloudguy.webp");
  Cooper = loadImage("assets/cooper.webp");
  Diamond = loadImage("assets/guydiamond.webp")

  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Main, data[i].Side)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }
  
}


function draw() {
  background("#0da143");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myMain, mySide) {
    this.name = myName;
    this.main = myMain;
    this.side = mySide;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1, 4);
  }


  display() {
    if (this.main == "Poppy") {
      image(Poppy, this.pos.x, this.pos.y, 230, 230)
      // text(this.name, this.pos.x, this.pos.y - 15);
    }
    if (this.main == "Branch") {
      image(Branch, this.pos.x, this.pos.y, 200, 200)
      // text(this.name, this.pos.x, this.pos.y - 15);
    }
    if (this.main == "Bridget") {
      image(Bridget, this.pos.x, this.pos.y, 200, 200)
      // text(this.name, this.pos.x, this.pos.y - 15);
    }
    if (this.side == "That cloud guy") {
      image(Cloud, this.pos.x + 200, this.pos.y, 200, 200)
      // text(this.name, this.pos.x, this.pos.y - 15);
    }
    if (this.side == "Cooper") {
      image(Cooper, this.pos.x + 200, this.pos.y, 200, 200)
      // text(this.name, this.pos.x, this.pos.y - 15);
    }
    if (this.side == "Guy Diamond") {
      image(Diamond, this.pos.x + 200, this.pos.y, 180, 230)
      // text(this.name, this.pos.x, this.pos.y - 15);
    }

    // ellipse(this.pos.x, this.pos.y, 80, 80);
    // text(this.name, this.pos.x, this.pos.y - 15);
    // text(this.main, this.pos.x, this.pos.y);
    // text(this.side, this.pos.x, this.pos.y + 15);

  }

  drive() {
    this.pos.x += this.vel;
    if (this.pos.x > width) this.pos.x = 0;
  }

}
