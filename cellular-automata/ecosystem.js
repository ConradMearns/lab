var boids = [];
var plants = [];

var select;
var lifedrain = 0.0005;

var spawnCounter = 0;
var spawnInc = 0.001;
var spawnCounterTarget = 0.5;

var startingBoids = 5;
var startingPlants = 10;

function setup(){
  createCanvas(600, 400);

  for(var i = 0; i < startingBoids; i++){
    newBoid(random(width), random(height));
  }

  for(var i = 0; i < startingPlants; i++){
    newPlant(random(width), random(height));
  }

  select = -1;
}

function draw(){
  background(51);

  spawnCounter += spawnInc;
  if(spawnCounter >= spawnCounterTarget){
    spawnCounter -= spawnCounterTarget;
    newPlant(random(width), random(height));
  }

  //Plant stuff
  for(var i = 0; i < plants.length; i++){
    plants[i].show();
  }

  //Boid stuff
  for(var i = boids.length-1; i >= 0; i--){
    //Try and find
    if(boids[i].travelToPos == undefined){
      boids[i].wander();
    }
    for(var j = plants.length-1; j >= 0; j--){
      if(boids[i].pos.dist(plants[j].pos) <= boids[i].seakRange){
        boids[i].travelTo(plants[j].pos);
      }
      //Eat plant
      if(boids[i].pos.dist(plants[j].pos) < 3){
        boids[i].travelToPos = undefined;
        boids[i].cal += plants[j].cal;
        plants.splice(j, 1);
      }
      //Duplicate
      if(boids[i].cal >= boids[i].duplicate){
        boids[i].cal -= 5;
        newBoid(boids[i].pos.x, boids[i].pos.y);
      }
    }


    //Update position information
    boids[i].update();
    boids[i].edges();

    //Draw
    boids[i].show();
    if(i == select){ boids[i].selectionShow();}
    //End Draw

    //Track death
    boids[i].cal -= lifedrain;
    if(boids[i].cal <= 0){
      //Explode
      var nx = boids[i].pos.x;
      var ny = boids[i].pos.y;
      console.log("Death");
      boids.splice(i, 1);
      newPlant(nx, ny);
    }

  }

}

function mouseClicked(){
  newPlant(mouseX, mouseY);
}

function newBoid(x, y){
  var newBoid = new Boid(x, y);
  boids.push(newBoid);
}

function newPlant(x, y){
  var plant = new Plant(x, y);
  plants.push(plant);
}

function getAngle(diff){
  var angleRadians = Math.atan2(diff.y, diff.x);
  return angleRadians;
}
