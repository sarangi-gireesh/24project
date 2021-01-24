var ground,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 paper = new Paper(50,600);
	 dustbin1=createSprite(dustbin1Position, dustbin1Y, 20,100);
 	dustbin1.shapeColor=color(255,0,0);

 	dustbin2 = Bodies.rectangle(dustbin2Position+20, dustbin2Y, 20,100 , {isStatic:true} );
 	World.add(world, dustbin2);

 	dustbin3=createSprite(dustbin3Position+100, dustbin3Y+40, 200,20);
 	dustbin3.shapeColor=color(255,0,0);

 	dustbin4 = Bodies.rectangle(dustbin4Position+100, dustbin4Y+45-20, 200,20 , {isStatic:true} );
 	World.add(world, dustbin4);

 	dustbin5=createSprite(dustbin5Position+200 ,dustbin5Y, 20,100);
 	dustbin5.shapeColor=color(255,0,0);

 	dustbin6 = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, dustbin6);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



