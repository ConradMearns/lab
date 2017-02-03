var particles = [];
var particle_count = 8;

function setup(){
  createCanvas(400, 400);

  for(var i = 0; i < particle_count; i++){
    particles.push(new Particle(height/2, width/2));
  }
}

function draw(){
  background(51);
  for(var i = 0; i < particles.length; i++){
    particles[i].update();

    for(var j = 0; j < particles.length; j++){
      if(i != j){
        if(distance(particles[i], particles[j]) < 10){
          var gray = map(distance(particles[i], particles[j]), 0, 10, 255, 51);
          stroke(gray);
          strokeWeight(1);
          line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        }
      }
    }

    particles[i].show();
  }
}

function distance(point1, point2){
  xs = point1.x-point2.x;
  ys = point1.y-point2.y;
  return sqrt(xs + ys);
}
