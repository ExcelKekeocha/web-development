//-----------------------------Rules to create game in p5.play.js---------------------------
//1. Two functions setup() draw() should be always there  create them. in setup() use createCanvas() to have size. so whenver you want to run or do any code one time like creating 
//object, giving images these things we can do in setup() all creating type of things like creating player, enemy do here. draw is to repeat. so whenver yoiu want to repeat
//any code do in function draw. eg : for loop, if then, velocity
//2. First thing is to create sprite.  sprite means object things. so if we  have in game 2 players and 3 enemies then in total we create 
//3.sprites. For everything we create spirte except background.
//4. we load  images in function preload() that means store. after taht do coding insetuop to display on screen.
//5. we can give velocity score text all in draw(). also use drawSprites() in draw function so that sprites can be displayed on screen.
//6. to move things randomly  we can use random function here. create all variables outside at top
//7. one variable we create for sprite and one for its image. sprite is liek body and image is like clothes on top of it. Always we create games and draw in canvas like a play area.

//create variables
var score=0
var space;
var spaceimage;
var enemy;
var enemyimage;
var backgroundimage;



// to store images
function preload(){
spaceimage=loadImage("level3space_game/spaceimageforspaceinvaders.jpeg");
enemyimage=loadImage("level3space_game/spaceinvaderenemy-removebg-preview.png");
backgroundimage=loadImage("level3space_game/spaceshuttle-removebg-preview.png");
}

// here do code which runs only once. here we create sprites  and display images
function setup(){
    createCanvas(800, 800);
  //create sprites
  space=createSprite(100, 100, 60, 60)//x, y, width height
  enemy=createSprite(200, 100, 50, 50)//x, y, width, height

  //now we will give image on top of the sprite
  space.addImage(spaceimage);
  enemy.addImage(enemyimage);
}

//here do coding which we want to repeat 
function draw(){
//give background image to background()
background(backgroundimage)
move()
if(enemy.isTouching(space)) {
  score=score+1 //remember always sprites are touching. sprite variables are used.
}

//gamoever 
if(score==10) {
  text("gameover", 100, 100)
}
//if our player is touching the enemy then will increase the score
    //Always give in draw to display sprites
    drawSprites()
    text("score;"+score,100,100)
}
function move1(){
if(keyDown("K_left")){
  space.x=space.x-4
}
if(keyDown("K_right")){
  space.x=space.x+4
}
if(keyDown("K_up")){
  space.y=space.y-4
}
if(keyDown("K_down")){
  space.y=space.y+4
}
}
//---------------------------------Assignment---------------------------------
//create ping pong game. Move both player up and down. create two score varoables and give two text for player1 and player 2. if player1 is touching ball then incrase score2 of player2. now give second if then. if player2 is touching ball tehn incraesen score1.if score1 becaose 5 or score2 becomes 5 then display gamepver on screen using text() function.
