var grass;

function setup() {
  createCanvas(500, 500, WEBGL);

  grass = loadModel('obj/tree.obj');
}

function draw() {
  background(51);

  rotateX(frameCount * 0.01);
  model(grass);

}
