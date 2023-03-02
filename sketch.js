var cnv;
let moverX=200;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(255, 0, 200);
}

function windowResized() {
  centerCanvas();
}
function draw(){
  fill(random(150),random(255),random(255));
  rect(mouseY,mouseX,50,60);
  moverX=moverX+1;
  rect(50,50,20,20);

}
