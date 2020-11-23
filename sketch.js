var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "purple";

  wall = createSprite(1500,200,30,height/2);
  wall.shapeColor = "blue";

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(rgb(255,204,153)); 
  
  car.velocityX = speed;

  if(wall.x-car.x < (wall.width+car.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation > 180){
      car.shapeColor = "red";
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }
    if(deformation < 100){
      car.shapeColor = "green";
    }
  }

  drawSprites();
}