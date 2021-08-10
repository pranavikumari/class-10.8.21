const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;

var bg, bgImg;
var helicopter, helicopterImg, helicopter2, helicopter2Img;
var tanker, tankerImg;
var bullet, bulletImg;
var ball, ballImg;

var score=0;



function preload(){
  bgImg= loadImage("Images/forestBg.jpg");
  helicopterImg= loadAnimation("Images/helicopter1.png", "Images/helicopter2.png","Images/helicopter3.png");
  tankerImg= loadImage("Images/tanker.png");
  bulletImg= loadImage("Images/bullet.png");
  ballImg= loadImage("Images/ball.png");
}

function setup() {
  createCanvas(1200,700);

  engine=Engine.create();
  world=engine.world;

  bg=createSprite(0,300,1500,1000);
  bg.addImage(bgImg);
  bg.scale=1;
  bg.velocityX=-3;

  helicopter= createSprite(200,100);
  helicopter.addAnimation("helicopters", helicopterImg);
  helicopter.scale=0.7;
}

function draw() {
  background("gray");

  Engine.update(engine);
  
  if(bg.x<500){
    bg.x=bg.width/2;
  }

  if(keyDown(UP_ARROW)){
    helicopter.y=helicopter.y-3;
  }

  if(keyDown(DOWN_ARROW)){
    helicopter.y= helicopter.y+3;
  }
  
  if(keyDown(RIGHT_ARROW)){
    helicopter.x=helicopter.x+3;
  }

  if(keyDown(LEFT_ARROW)){
    helicopter.x=helicopter.x-3;
  }

  if(keyDown("SPACE")){
    shoot();



  }

  // if(bullet.isTouching(helicopter)){
  //   helicopter.velocityX=0;
  //   helicopter.velocityY=0;
     
  // }
  
  // if(ball.isTouching(tanker)){
  //   score=score+1;
  // }

  drawSprites();
}  
    
    

function shoot(){
  var ball=createSprite(tanker.x, tanker.y,5,10);
  ball.addImage(ballImg);
  ball.scale=0.1;

  ball.velocityX=20;
  ball.velocityY=1;

}
  
function spawnTankers(){
  if(frameCount%100===0){
  tanker=createSprite(700,517);
  tanker.addImage(tankerImg);
  tanker.scale=0.4;

  bullet=createSprite(tanker.x,tanker.y);
  bullet.addImage(bulletImg);
  bullet.scale=0.2;
  bullet.angle=10;

  bullet.velocityY=-13;
  bullet.velocityX=-13;
 }
}

