var boids = [];
var modules = [];
var bits = [];

var startingBoids = 4;

var range = 100;
var friction = 0.55;

var avg_energy = 0;
var population = 0;
var totalSpawns = 0;
var totalDeaths = 0;

function setup(){
  createCanvas(400, 600);

  for(var i = 0; i < startingBoids; i++){
    newBoid(random(width), random(height));
  }

  newPhotoModule(random(width), random(height));
  newPhotoModule(random(width), random(height));
  newPhotoModule(random(width), random(height));
  newCondenserModule(random(width), random(height));
  newAssemblyModule(random(width), random(height));

}

function draw(){
  background(51);

  for(var i = bits.length-1; i >= 0; i--){
    bits[i].update(friction);
    bits[i].edges();
    bits[i].show();
  }

  for(var j = modules.length-1; j >= 0; j--){
    modules[j].update(friction);
    modules[j].edges();
    modules[j].show();
  }

  avg_energy = 0;
  for(var i = boids.length-1; i >= 0; i--){
    for(var j = modules.length-1; j >= 0; j--){

      if(boids[i].module == undefined){
        //Make modules "magnetic"
          var diff = boids[i].pos.copy();
          diff.sub(modules[j].pos);
          var newV = p5.Vector.fromAngle(getAngle(diff));
          // if(boids[i].pos.dist(modules[j].pos) < range){
            newV.mult( range/boids[i].pos.dist(modules[j].pos) );
          // }
          newV.mult(0.25);
          modules[j].applyForce(newV);

        if(boids[i].pos.dist(modules[j].pos) <= (boids[i].size+modules[j].size)/2){
            boids[i].module = modules[j];
            modules.splice(j, 1);
        }
      }

    }

    boids[i].update(friction);
    boids[i].edges();
    boids[i].show();

    if(boids[i].module != undefined){
      if(boids[i].module.success){
        boids[i].module.success = false;
        //Apply ejection forces
        var ejectionForce = p5.Vector.random2D();
        ejectionForce.mult(15);
        boids[i].applyForce(ejectionForce);
        //Seperate
        var type = boids[i].module.type;
        boids[i].module = undefined;

        ejectionForce.mult(-1);
        if(type == 1){
          newPhotoModule(boids[i].pos.x, boids[i].pos.y);
        }else if(type == 2){
          newCondenserModule(boids[i].pos.x, boids[i].pos.y);
        }else if(type == 3){
          newAssemblyModule(boids[i].pos.x, boids[i].pos.y);
        }
        modules[modules.length-1].applyForce(ejectionForce);
      }
    }

    avg_energy += boids[i].energy;

    if(boids[i].energy == 0){
      for(var b = 0; b < 3; b++){
        var ejectionForce = p5.Vector.random2D();
        ejectionForce.mult(15);
        var bit = new Bit(boids[i].pos.x, boids[i].pos.y)
        bit.applyForce(ejectionForce);
        bits.push(bit);
      }
      boids.splice(i, 1);
    }


  }

  population = boids.length;
  avg_energy = avg_energy / population;
  totalDeaths = totalSpawns - population;

}

function mouseClicked(){
  for(var i = 0; i < boids.length; i++){
    var force = p5.Vector.random2D();
    force.setMag(10);
    boids[i].applyForce(force);
  }
  for(var i = 0; i < modules.length; i++){
    var force = p5.Vector.random2D();
    force.setMag(10);
    modules[i].applyForce(force);
  }
  for(var i = 0; i < bits.length; i++){
    var force = p5.Vector.random2D();
    force.setMag(10);
    bits[i].applyForce(force);
  }
  // newPlant(mouseX, mouseY);
}

function newBoid(x, y){
  var newBoid = new Boid(x, y);
  boids.push(newBoid);
}

function newPhotoModule(x, y){
  var newModule = new Module(x, y);
  newModule.type = 1;
  newModule.color = createVector(0, 255, 0);
  newModule.moduleCode = function(boid){
    boid.energy += 0.01;

    var newForce = p5.Vector.random2D();
    newForce.mult(0.2);
    boid.applyForce(newForce);

    if(boid.energy >= 30){
      this.success = true;
    }
  }
  modules.push(newModule);
}

function newCondenserModule(x, y){
  var newModule = new Module(x, y);
  newModule.type = 2;
  newModule.color = createVector(200, 100, 100);
  newModule.moduleCode = function(boid){
    if(boid.energy < 5){
      this.success = true;
    }

    this.color.x += 1;
    this.color.y -= 0.5;
    this.color.z -= 0.5;

    if(this.color.x >= 255){
      this.color.x = 200;
      //Apply ejection forces
      var bit = new Bit(this.pos.x, this.pos.y);
      var ejectionForce = p5.Vector.random2D();
      ejectionForce.mult(10);
      bit.applyForce(ejectionForce);
      bits.push(bit);
      boid.energy -= 5;
      if(this.color.y <= 0){
        this.success = true;
      }
    }
  }
  modules.push(newModule);
}

function newAssemblyModule(x, y){
  var newModule = new Module(x, y);
  newModule.type = 3;
  newModule.color = createVector(200, 200, 0);
  newModule.moduleCode = function(boid){
    var closestPos = undefined;
    for(var i = bits.length-1; i >= 0; i--){
      if(closestPos == undefined || this.pos.dist(bits[i].pos) < this.pos.dist(closestPos)){
        closestPos = bits[i].pos;
      }

      if(this.pos.dist(closestPos) < 4){
        bits.splice(i, 1);
        this.color.z += 25;
      }
    }
    if(closestPos != undefined){
      var diff = closestPos.copy();
      diff.sub(this.pos);

      var angle = getAngle(diff);

      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.6);
      boid.applyForce(v);
    }

    if(this.color.z >= 150){
      this.success = true;
      newBoid(this.pos.x, this.pos.y);
    }
  }
  modules.push(newModule);
}

function getAngle(diff){
  var angleRadians = Math.atan2(diff.y, diff.x);
  return angleRadians;
}
