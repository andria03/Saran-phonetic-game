var gamestate=0;

function preload(){
  backgroundimg=loadImage("images/background.jpg")
}

function setup(){
  canvas=createCanvas(displayWidth, displayHeight);
  form= new Form();

}

function draw(){
  if(gamestate===0){
      background(backgroundimg);
      form.displayenterbutton();
  }
  else if(gamestate===1){
    
  }
}