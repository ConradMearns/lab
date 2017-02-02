var grass;
var tree;
var rock;

var light_intensity = 10;

var test = 1;

var sun1, sun2;

function setup() {
  createCanvas(500, 500, WEBGL);
  tree = loadModel('http://conrads.website/p5-sketches/grass/obj/tree.obj');
  rock = loadModel('http://conrads.website/p5-sketches/grass/obj/Rock_1.obj');
  grass = loadModel('http://conrads.website/p5-sketches/grass/obj/grass.obj');


  var fov = 60 / 180 * PI;
  var cameraZ = (height/2.0) / tan(fov/2.0);
  perspective(60 / 180 * PI, width/height, cameraZ * 0.1, cameraZ * 10);

  sun1 = color(204, 102, 0);
  sun2 = color(0, 102, 153);
  gradient = undefined;
}

function draw() {
  background(51);

  setGradient(sun1, sun2);

  // var yes = sin(frameCount * 0.1) * 400;
  camera(-100, -30, -50);

  orbitControl();

  directionalLight(250, 250, 250, -light_intensity, light_intensity, light_intensity);

  scale(30);
  rotateY(PI);
  push();
    push();
      translate(1, 0, 2);
      ambientMaterial(39, 174, 96);
      model(tree);
    pop();
    push();
      translate(2, 0, 1.6);
      ambientMaterial(39, 174, 96);
      model(tree);
    pop();
    push();
      translate(-2.5, 0, -3);
      ambientMaterial(39, 174, 96);
      model(tree);
    pop();

    push();
      translate(0, 2, 0);
      scale(0.6);
      ambientMaterial(109, 135, 100);
      model(grass);
    pop();

    push();
      translate(0, 3.6, 0);
      scale(7, 2, 4);
      ambientMaterial(160, 82, 45);
      model(rock);
    pop();
    push();
      rotateY(PI/12);
      translate(0, 2.5, 0);
      scale(6, 1, 5);
      ambientMaterial(39, 174, 96);
      model(rock);
    pop();
  pop();
}

function createGradient(c1, c2){
  var t = 1/400;
  img = createImage(width, height);
  img.loadPixels();
  for (i = 0; i < img.width; i++) {
    for (j = 0; j < img.height; j++) {
      var nc = lerpColor(c1, c2, t*(j+1));
      nc = lerpColor(nc, color(0,0,0), 0.89);
      // var nc = c1;
      img.set(i, j, nc);
    }
  }
  img.updatePixels();
  return img;
}

function setGradient(c1, c2) {
  push();
  if(gradient == undefined){
    gradient = createGradient(c1, c2);
  }
  texture(gradient);
  translate(0, cos(frameCount*0.005)*100, -400);
  rotateZ(PI/8);
  plane(width*5, height*5);
  pop();
}
