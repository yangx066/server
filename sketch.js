/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle

var x, y, z;
var pres=0;
var b=400;
var y1;
var counter=0;
var c=132;
var d=160;
var cx=0;
var cy=50

function setup() {
back = loadImage("assets/back.png");
front = loadImage("assets/front.png");
cat = loadImage("assets/cat.png");
  var width = 900
  var height =600
  createCanvas(width, height);
  textSize(10);

}

function draw() {
	
  
  background(255,255,255);
   image(back, 0, 0);




  if(y==0 && b>300){
  	b=b-10;
  } else if(y==1 && 300<b<400){
  	b=b+25;
  }

  if(y==1 && b>400){
  	b=400;
  }

  if(y1==1 && y1 != y){
  	counter++;
  }
  console.log(counter);
  y1=y;
  if(counter == 10){
  	c=0;
  	d=0;
  	image(cat,cx,cy);
  	if(cy<=50){
  		cy=cy-3;
  	}
  	if(cy=0){
  		cy=0;
  	}

  }
  textSize(42);
  fill(77,77,77);
  text("YOU HAVE",557,108);
  text("DRUNK",557,162);
  text("WATER",557,213);
  text("FOR",557,262);

  textSize(118);
  fill(255,26,86);
  text(counter+"/10", 550, 390);

  textSize(71);
  fill(124,124,124);
  text("TIMES",557,460);

  noStroke();
  fill(247,221,243);
  ellipse(283,b,c,d);

  image(front, 0, 0);


}

