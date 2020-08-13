var canvaswidth = 500, canvasheight = 400;
var bird;
var bird_ypos = canvasheight/2;
var bird_xpos = canvaswidth/8;
var bird_size = 30;
var pipe_1;
var pipe_2;
var pipe_1height = canvasheight-bird_size;
var pipe_1xpos = canvaswidth;
var pipe_1ypos = 0;
var pipe_2ypos = canvasheight;
var pipe_2height = canvasheight - pipe_1height/2;
var score = 0;
var pipe_1bottom=pipe_1ypos+pipe_1height/2;
var pipe_2top=pipe_2ypos-pipe_2height/2;
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
displayscore()
updatescore()
collidepipes()
} 
function movebird() {
  if (keyIsDown(32)){
    bird_ypos-=5;
  } else{
    bird_ypos+=3;
  }
  
  }
  function movepipe() {
    if (pipe_1xpos>=-30) {
      pipe_1xpos-=2;
    }else{
      pipe_1xpos=560;
      pipe_1height=random(400);
      pipe_2height=random(400);
    }
  }
  function displayscore() {
     fill(color(0,0,0));
   textSize(70);
    text(score, canvaswidth/2, canvasheight/8);

   }
   function updatescore() {
     if ((bird_xpos>=pipe_1xpos)&&(pipe_1xpos>=62)) {
       score++;
     }
   }
    function collidepipes() {
      
var pipe_1ypos = 0;
var pipe_2ypos = canvasheight;

var pipe_1bottom=pipe_1ypos+pipe_1height/2;
var pipe_2top=pipe_2ypos-pipe_2height/2;

     if ((bird_ypos>=pipe_1bottom)&&(pipe_1xpos<=92.5)&&(pipe_1xpos>=32.5)||(bird_ypos<=pipe_2top)&&(pipe_1xpos<=92.5)&&(pipe_1xpos>=32.5)||(bird_ypos<=0)||(bird_ypos>=400)) {
       bird_ypos=canvasheight/2;
       pipe_1xpos=530;
       pipe_1height=random(400);
       pipe_2height=random(400);
      resetscore();
     } }
      function resetscore() {
     score=0;
   }
   console.log(pipe_1bottom)
   console.log(pipe_1height)
   console.log(pipe_2height)
   console.log(pipe_2top)
  
//&&(pipe_1xpos<=92.5)&&(pipe_1xpos>=32.5)
//(bird_ypos<=pipe_2top)&&
//(bird_ypos>=pipe_1bottom)&&
//(pipe_1xpos<=92.5)&&(pipe_1xpos>=32.5)||(pipe_1xpos<=92.5)&&(pipe_1xpos>=32.5)||(bird_ypos<=0)||(bird_ypos>=400)