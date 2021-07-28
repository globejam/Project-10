//creating sprites varibles
var sea,seaImage;
var ship,shipImage;
//preloading images
function preload(){
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  //setting up canvas and sprites
  createCanvas(920,768);
  sea = createSprite(960,384);
  sea.addImage(seaImage);
  sea.velocityX = -3;

 ship = createSprite(200,480);
 ship.addAnimation("moving",shipImage);
 ship.scale = 0.5;

}


function draw(){
  background("red");
//infinte effect
  if(sea.x < 0){
    sea.x = sea.width/2;
  }

  drawSprites();
}