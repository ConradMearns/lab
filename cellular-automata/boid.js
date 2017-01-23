function Boid(x, y){
  this.maxspeed = 1;
  this.seakRange = 100;

  this.showSeakRange = false;

  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.angleExtra = random(0, TWO_PI);

  this.travelToPos = undefined;

  this.cal = 5.0;
  this.duplicate = random(8, 18);

  this.travelTo = function(travelPos){
    if(this.travelToPos == undefined){
      this.travelToPos = travelPos;
    }
    var diff = this.travelToPos.copy();
    diff.sub(this.pos);

    var angle = getAngle(diff);

    var v = p5.Vector.fromAngle(angle);
    v.setMag(1);
    this.applyForce(v);
  }

  this.wander = function(){
    var angle = this.vel.heading();
    var v = p5.Vector.fromAngle(angle);
    v.add(p5.Vector.fromAngle(this.angleExtra));
    v.setMag(1);
    this.applyForce(v);
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.angleExtra += random(-0.01, 0.01);
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.show = function(){
    if(this.showSeakRange){
      stroke(255);
      fill(255,255,255, 40);
      strokeWeight(0);
      ellipse(this.pos.x, this.pos.y, this.seakRange*2);

      stroke(255);
      push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        strokeWeight(2);
        line(0, 0, 10, 0);
      pop();
    }
    stroke(255);
    strokeWeight(8);
    point(this.pos.x, this.pos.y);
  }

  this.selectionShow = function(){
    stroke(255);
    fill(0,0,0,0);
    strokeWeight(1);
    ellipse(this.pos.x, this.pos.y, 12);
  }

  this.edges = function(){
    if(this.pos.x > width){
      this.pos.x = 0;
    }
    if(this.pos.x < 0) {
      this.pos.x = width;
    }
    if(this.pos.y > height){
      this.pos.y = 0;
    }
    if(this.pos.y < 0){
      this.pos.y = height;
    }
  }
}
