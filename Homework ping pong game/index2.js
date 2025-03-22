let paddle1;
let paddle1image;
let paddle2;
let paddle2image;
let ball;
let ballimage;
let backgroundimage;


function preload(){
  paddle1image=loadImage("Homework ping pong game\download(4).png")
  paddle2image=loadImage("Homework ping pong game\download(4).png")
  ballimage=loadImage("Homework ping pong game\R.png")
  backgroundimage=loadImage("Homework ping pong game\spaceshuttle-removebg-preview.png")


  
paddle1.addImage("ADD",paddle1image);
paddle2.addImage("ADD",paddle2image);
ball.addImage("IMG",ballimage);
}


function draw(){

background(backgroundimage)


    drawSprites()
}
function move(){
  if(keyDown("K_up")){
    space.y=space.y-4
  }
  if(keyDown("K_down")){
    space.y=space.y+4
  }
  }