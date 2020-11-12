
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3;
var ground;
var paper;

function setup() {
	createCanvas(600, 400);

	engine = Engine.create();
	world = engine.world;

	block1 = new Dustbin(500,370,100,15);
	block2 = new Dustbin(450,350,15,70);
	block3 = new Dustbin(550,350,15,70)

	ground = new Ground(300,380,600,15);

	paper = new Paper(20,370,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  block1.display();
  block2.display();
  block3.display();

  ground.display();

  paper.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-50})
	}
}