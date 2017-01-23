function Plant(x, y){

  this.pos = createVector(x, y);

  this.cal = random(0, 5);

  this.show = function(){
    stroke(0, 255, 0);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  }

}
