let f1, f2;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  f1 = loadFont("assets/BebasNeueRegular.ttf");
}

function draw() {
  background("green");
  textSize(100);
  textFont(f1);
  text("hello", width/2, height/2);

}
