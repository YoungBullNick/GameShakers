var canvaswidth = 500, canvasheight = 400;
var bird;
var bird_ypos = canvasheight/2;
var bird_xpos = canvaswidth/8;
var bird_size = 30;
var pipe_1;
var pipe_2;
var pipe_1height = 200-bird_size;
var pipe_1xpos = canvaswidth;
var pipe_1ypos = 0;
var pipe_2ypos = canvasheight;
var pipe_2height = canvasheight - bird_size*4;
function setup() {
	createCanvas(500, 400);
  rectMode(CENTER);
  var pipe_1height = 200-bird_size;
  bird = rect(bird_xpos,bird_ypos,bird_size,bird_size);
  pipe_1 = rect(pipe_1xpos,pipe_1ypos,60,pipe_1height);
  pipe_1 = rect(pipe_1xpos,pipe_2ypos,60,pipe_2height);
}

function draw() {
  frameRate(60);
  background(color(40,40,255));
  fill("yellow");
  bird = rect(bird_xpos,bird_ypos,bird_size,bird_size);
  fill(color(80,255,80));
  pipe_1 = rect(pipe_1xpos,pipe_1ypos,60,pipe_1height);
  pipe_1 = rect(pipe_1xpos,pipe_2ypos,60,pipe_2height);
  movebird()
movepipe()
} 
function movebird() {
  if (keyIsDown(32)){
    bird_ypos-=5;
  } else{
    bird_ypos+=3;
  }
  
  }
  function movepipe() {
    if (pipe_1xpos>0) {
      pipe_1xpos-=2;
    }else{
      pipe_1xpos=canvaswidth;
      pipe_1height=random(400);
    }
  }
