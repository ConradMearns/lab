var pixoff = 12;
var img;

var test = 128;

function setup(){
  // createCanvas(400, 400, WEBGL);
  img = loadImage('http://conrads.website/lab/glitch/head.png');
  createCanvas(600, 623);

}

function draw(){
  background(0);
  // rotateZ(radians(rotationZ));
  // rotateX(radians(rotationX));
  // rotateY(radians(rotationY));
  // box(200, 200, 200);

  noFill();
  strokeWeight(1);

  var x = 0;
  var y = 0;

  tint(255, 0, 0, 128);
  image(img, x-cosoff(rotationX), y-sinoff(rotationX));

  tint(0,255,255, 64);
  image(img, x+cosoff(rotationY), y+sinoff(rotationY));
}

function cosoff(rotation){
  return ((cos(rotation/TWO_PI)) * pixoff);
}

function sinoff(rotation){
  return ((sin(rotation/TWO_PI)) * pixoff);
}
