
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	
	createCanvas(800, 700);

	a1= new hello2(450,680,900,50);	
	a2= new hello3 (350,200,400,25);
	b2=new hello4(350,400,50)
	b=new hello4(450,400,50)
	b3=new hello4(300,400,50)
	b4=new hello4(250,400,50)
	b5=new hello4(400,400,50)
	j1= new hello(a2.body,b2.body,350,400);
	j2= new hello(a2.body,b.body,450,400);
	j3= new hello(a2.body,b3.body,300,400);
	j4= new hello(a2.body,b4.body,250,400);
	j5= new hello(a2.body,b5.body,400,400);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
	
	rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
 
  a1.display();
  a2.display();
  b2.display();
  b.display();
  b3.display();
  b4.display();
  b5.display();
  j1.display();
}



