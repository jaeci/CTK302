let state=0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(30);
}

function draw() {
  switch (state) {
    case 0:
      background('green');
      text("case 0", 250, 250);
      break;
    case 1:
      background('grey');
      text("case 1", 250, 250);
      break;
    case 2:
      background('pink');
      text("case 2", 250, 250);
      break;
  }

  rect(width/2-50, height-100, 100, 50);
}

function mouseReleased(){

  if((mouseX > width/2-50) && (mouseX <width/2 + 100) && (mouseY>height-100) && (mouseY<height-100+50)){
  state++;
  if (state>2){
    state=0;
  }
  }
}
