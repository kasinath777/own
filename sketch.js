const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var evil, plane, missile;
var bg;

function preload() {
    bg = loadImage("sky.png");
}



function setup() {
  createCanvas(800,400);
  plane= new Plane(650,200);
  
}

function draw() {
  background(bg);  
bg.velocityX = 20
if(sky.width <400){
sky.width = sky.width + sky.width/2;
}

if(plane.isTouching(evil)){
plane.destroy();
}

if(missile.isTouching(evil)){
missile.destroy();
evil.destroy();
}
evil.display();
missile.display();
plane.display();
  drawSprites();
}

function spawnPlane(){
if(frameCount % 100 === 0){
evil = new Evil(random(1, 400));
}

}

function keyPressed(){
if(keyDown(SPACE)){
missile = new Missile(plane.x, plane.y);
missile.velocityY = -10;
}

if(keyDown(DOWN_ARROW)){
plane.y = plane.y + 10
}
if(keyDown(UP_ARROW)){
plane.y = plane.y - 10
}
}