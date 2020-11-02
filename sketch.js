var game;
var form;
var bgimage;
var gameState = 0;
var bgimage1;
var player1_img;
var player2_img;
var player3_img;
var player;

function preload(){
 bgimage = loadImage("pictures/bg.jpg")
 bgimage1 = loadImage("pictures/Sea.jpg")

 player1_img = loadImage("pictures/surfer-1.png");
 player2_img = loadImage("pictures/surfer-2.png");
 player3_img = loadImage("pictures/surfer-3.png");
}

function setup() {
  createCanvas(displayWidth-15,displayHeight-115);

  player = createSprite(600,50,20,20);
  player.scale=0.2;

  game = new Game();
  game.start();

  
}

function draw() {
  if (gameState === 0){
   background(bgimage);
  }
  if(gameState === 1){
    background(bgimage1);
    game.choosePlayer();
  }
  if(gameState===2){
    background(bgimage1);
    game.play();
  }
  
  
}