xpos = 200
ypos = 200
dx = 1;
dy = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
rect(10,200,10,80);
  rect(380,mouseY,10,80);
  ellipse(xpos,ypos,20,20);
  if (xpos>=width-20 || xpos==20)
    {
      dx = -dx
    }
  if (ypos>=height-20 || ypos==20)
    {
      dy = -dy
    }
  fill("black");
  text("PONG GAME, PRESS SPACE TO RESET",155,20);
  for(var i=0; i < 400; i+=20);
  line(200,i,200,i+=20);
  xpos = xpos +dx;
  ypos = ypos +dy; 
}