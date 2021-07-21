
var trex ,trex_running;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  edges=createEdgeSprites()
  //create a trex sprite
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;
 //creating the ground
 ground=createSprite(300,190,600,5);
 ground.addImage("ground",groundImage)
 ground.x=ground.width/2
 ground.velocityX=-3
}

function draw(){
background("white")
drawSprites()
  if (keyDown("space")){
    trex.velocityY=-10
  }
  if (ground.x<0){
    ground.x=ground.width/2
  }
  trex.velocityY=trex.velocityY+0.5;
trex.collide(ground);
}
