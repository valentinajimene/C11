var sea;
var ship , ship_moving;
var imagesea;
function preload(){
 ship_moving = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
imagesea = loadImage ("sea.png");

}

function setup(){
  createCanvas(400,400);

  sea = createSprite (200, 200, 200, 200);
  sea . addImage (imagesea);
sea. scale = 0.3;

ship = createSprite (200, 200, 200, 200);
ship .addAnimation  ("movieng", ship_moving);
ship.scale = 0.3;
}

function draw() {
  background("blue");
 drawSprites ();
  
}