
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, bobDiameter;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(150,600,120);
	bobObject2 = new Bob(270,600,120);
	bobObject3 = new Bob(390,600,120);
	bobObject4 = new Bob(510,600,120);
	bobObject5 = new Bob(630,600,120);

	roofObject = new Roof(400,75,660,50);

	rope1 = new rope(bobObject1.body, roofObject.body, bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();

  drawSprites();
 
}



