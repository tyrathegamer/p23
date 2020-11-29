
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var dustbin1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(85, 85, 21);
	//dustbin base
	dustbin1 = new Dustbin(900,650, 220, 20);
	//left 
	dustbin2 = new Dustbin(800,610,20,100);
	//right
	dustbin3 = new Dustbin(1000,610,20,100);

	ground = new Ground(600,height - 30,1200,20);

	Engine.run(engine);
	keyPressed();  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  paperBall.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  drawSprites();
}

function keyPressed(){
    if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x: 85, y: -85});
	}
}

