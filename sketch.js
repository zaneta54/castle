function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 100, 50);
  createSprite(400,300,400,10);
  createSprite(400,220,200,10);
  createSprite(400,100,10,150);
  createSprite(360,50,10,250);
  createSprite(440,100,10,250);
  createSprite(400,250,400,50);
  createSprite(400,300,400,50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}