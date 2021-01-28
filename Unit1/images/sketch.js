let mossy ;
let red ;
let yellow ;

function setup() {
  createCanvas(800, 800);
  mossy = loadImage("assets/mossyfrog.jpg")
  red = loadImage("assets/redfrog.jpg")
  yellow = loadImage("assets/yellowfrog.jpg")

  imageMode(CENTER) ;
  rectMode(CENTER) ;
  textAlign(CENTER) ;
}

function draw() {
  background('black')
  image(mossy, width/2, height/2, 200, 200)
  image(red, width/2, height/2 - 220, 200, 200)
  image(yellow, width/2, height/2 + 220, 200, 200)


}
