//To give image we first load in preload in variable and then use image() to display on screen
let img;

// Load the image.
function preload() {
  img = loadImage('/img.png');
}

function setup() {
  createCanvas(100, 100);

  background(50);
  //loadPixels() is used to load get pixels whcih we will get in beginning so that we can chnage the color of the pixels.
  //After this we use the for loop and change the color. rgb means it will get number for each color combination. 
  //Then use updatePixel() to pixels whcih means picture color on screen
  img.loadPixels() // means our loop starts at 0 and end when pixels length is ending. colorcode in coding is only from 0 to 255.
  for(let i=0;i<img.pixels.length;i++){
img.pixels[i]=255-img.pixel[i]//r
img.pixels[i+1]=255-img.pixel[i+1]//g
img.pixels[i+2]=255-img.pixel[i+2]//b
  }

  // Draw the image 50x50.
 img.updatePixels()

}
function draw(){
    image(img, 0, 0, 50, 50);
}
//changing the image to negative image.