function Particle(x, y){
  this.theta = 0;
  this.mag = random((x+y)/2) + 10;
  this.theta_v = (random(10) - random(10))/this.mag*0.1;

  this.cx = x;
  this.cy = y;

  this.x;
  this.y;

  this.update = function(){
    this.theta += this.theta_v;
  }

  this.show = function(){
    this.x = this.mag * cos(this.theta) + this.cx;
    this.y = this.mag * sin(this.theta) + this.cy;

    stroke(255);
    strokeWeight(4);
    point(this.x, this.y);
  }
}
