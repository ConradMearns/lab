var grass;
var tree;

function setup() {
  createCanvas(500, 500, WEBGL);

  grass = loadModel('http://conrads.website/p5-sketches/grass/obj/grass.obj');
  tree = loadModel('http://conrads.website/p5-sketches/grass/obj/tree.obj');
}

function draw() {
  background(51);
  ambientLight(150);

  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.002);
  push();
    //Grass
    push();
    scale(10);
    ambientMaterial(50, 200, 50);
    model(grass);
    pop();

    //Grass
    push();
    translate(100, 0, 0);
    scale(20);
    ambientMaterial(50, 200, 50);
    model(tree);
    pop();
  pop()
}
