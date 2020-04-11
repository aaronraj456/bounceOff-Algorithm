var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(500, 200, 50, 80);
  fixedRect.debug=true;
  fixedRect.shapeColor='Green';

  movingRect = createSprite(100,200,80,30);
  movingRect.debug=true;
  movingRect.shapeColor='green';

  movingRect.velocityX=2;
  fixedRect.velocityX=-2;

}

function draw() {
  background(255,255,255);  
  /*movingRect.x=mouseX;
  movingRect.y=mouseY;*/

  bounceOff(movingRect,fixedRect);

  drawSprites();
}

