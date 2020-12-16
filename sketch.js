var bullet,wall,1bullet,1wall;
var speed,weight;




function setup() {
  createCanvas(1500,400);

  speed=random(55,90);
  weight=random(400,1500);

  wall=createSprite(1300,200,60,height/2)

bullet=createSprite(50,200,50,50);
bullet.velocityX=speed;

 

}

function draw() {
  background(0);  

if(hasCollided(bullet,wall)){
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10)
{
    wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
    wall.shapeColor=color(0,255,0);
}
}

  drawSprites();
}


function hasCollied(1bullet,1wall){

bulletRightEdge=1bullet.x+1bullet.width;
wallLeftEdge=1wall.x;




}
