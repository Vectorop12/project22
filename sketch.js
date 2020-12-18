var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	bottomSprite=createSprite(400,650,200,20);
	bottomSprite.shapeColor=color("red");

	sideSprite=createSprite(300,600,20,120);
	sideSprite.shapeColor=color("red");

	side2Sprite=createSprite(500,600,20,120)
	side2Sprite.shapeColor=color("red");




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world,ground);
	 
	 bottom = Bodies.rectangle(400,650,20,200,{isStatic:true});
	 World.add(world,bottom);

	 side = Bodies.rectangle(300,600,20,120,{isStatic:true});
	 World.add(world,side);

	 side2 = Bodies.rectangle(500,600,20,120,{isStactic:true});
	 World.add(world,side);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
    
  }
}




