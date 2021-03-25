
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var leftBox;
var rightBox;
var bottomBox;
var ground;
var paper;
var dustbinImge;

function preload()
{
	dustbinImg = loadImage("dustbinFinal.png");
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	leftBox = new Dustbin(550,620,20,100);
	bottomBox = new Dustbin(610,660,100,20);
	rightBox = new Dustbin(670,620,20,100);
    
	ground = new Ground(400,680,800,20);

	paper = new Paper(100,600,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  leftBox.display();
  bottomBox.display();
  rightBox.display();
  
  ground.display();

  paper.display();

  drawSprites();

}
function keyPressed (){
	
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
	  }
	 

}


