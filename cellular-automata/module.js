function Module(x, y){
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.size = 4;
  this.color = createVector(0, 255, 255);

  this.success = false;

  this.type = 0;

  this.update = function(friction){
    var f = this.vel.copy();
    f.mult(-1);
    f.normalize();
    f.mult(friction);
    this.applyForce(f);

    this.vel.add(this.acc);
    // this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.success = false;
  }

  this.moduleCode = function(boid){
    this.acc.mult(0);
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.show = function(){
    strokeWeight(this.size);
    stroke(this.color.x, this.color.y, this.color.z);
    point(this.pos.x, this.pos.y);
  }

  this.edges = function(){
    if(this.pos.x > width){
      var force = createVector(-10, 0);
      this.applyForce(force);
    }
    if(this.pos.x < 0) {
      var force = createVector(10, 0);
      this.applyForce(force);
    }
    if(this.pos.y > height){
      var force = createVector(0, -10);
      this.applyForce(force);
    }
    if(this.pos.y < 0){
      var force = createVector(0, 10);
      this.applyForce(force);
    }
  }
}
