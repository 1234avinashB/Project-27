
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	roof= new Roof(width/2,height/5,width/7,20);
	bob1 = new Bob(700,250,40);
	chain1=new Chain(bob1.body,{x:700,y:150})
	bob2 = new Bob(750,250,40);
	chain2=new Chain(bob2.body,{x:750,y:150})
	bob3 = new Bob(800,250,40);
	chain3=new Chain(bob3.body,{x:800,y:150})
	bob4 = new Bob(850,250,40);
	chain4=new Chain(bob4.body,{x:850,y:150})
	bob5 = new Bob(900,250,40);
	chain5=new Chain(bob5.body,{x:900,y:150})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  roof.display();
  chain1.display();
  bob1.display();
  chain2.display();
  bob2.display();
  chain3.display();
  bob3.display();
  chain4.display();
  bob4.display();
  chain5.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

