var pixoff = 6;
var image;

function setup(){
  // createCanvas(400, 400, WEBGL);
  createCanvas(400, 400);
  image = loadImage('http://conrads.website/lab/glitch/head.png');
}

function draw(){
  background(200);
  // rotateZ(radians(rotationZ));
  // rotateX(radians(rotationX));
  // rotateY(radians(rotationY));
  // box(200, 200, 200);

  noFill();
  strokeWeight(1);

  var x = 40;
  var y = 40;

  stroke('red');
  rect(x-cosoff(rotationX), y-sinoff(rotationX), 90, 90);

  stroke('cyan');
  rect(x-cosoff(rotationY), y-sinoff(rotationY), 90, 90);

  strokeWeight(2);
  stroke(color(255, 255, 255));
  fill(color(255, 255, 255));
  rect(x, y, 90, 90);
}

function cosoff(rotation){
  return ((cos(rotation/TWO_PI)) * pixoff);
}

function sinoff(rotation){
  return ((sin(rotation/TWO_PI)) * pixoff);
}
