var pixoff = 6;
var img;

var test = 128;

function setup(){
  // createCanvas(400, 400, WEBGL);
  createCanvas(800, 800);
  img = loadImage('http://conrads.website/lab/glitch/head.png');

}

function draw(){
  background(255);
  // rotateZ(radians(rotationZ));
  // rotateX(radians(rotationX));
  // rotateY(radians(rotationY));
  // box(200, 200, 200);

  noFill();
  strokeWeight(1);

  var x = 40;
  var y = 40;
  var sizex = img.width;
  var sizey = img.height;

  // strokeWeight(2);
  // stroke(color(255, 255, 255));
  // fill(color(255, 255, 255));
  // rect(x, y, sizex, sizey);
  tint(255, 255, 255, 128);
  image(img, x, y);

  // stroke('red');
  // rect(x-cosoff(rotationX), y-sinoff(rotationX), sizex, sizey);
  tint(255, 0, 0, 128);
  image(img, x-cosoff(rotationX), y-sinoff(rotationX));

  // stroke('cyan');
  // rect(x-cosoff(rotationY), y-sinoff(rotationY), sizex, sizey);
  tint(0,255,255, 128);
  image(img, x+cosoff(rotationY), y+sinoff(rotationY));
}

function cosoff(rotation){
  return ((cos(rotation/TWO_PI)) * pixoff);
}

function sinoff(rotation){
  return ((sin(rotation/TWO_PI)) * pixoff);
}
