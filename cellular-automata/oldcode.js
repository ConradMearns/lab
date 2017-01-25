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
