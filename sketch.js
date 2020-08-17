
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree_img, boy_img;

function preload()
{   tree_img = loadImage('tree.png');
	boy_img = loadImage('boy.png');
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,690,1200,30);

	mango1 = new Mango(600,100,5,)
	stone = new Stone(200,400,2)
	chain = new Chain(stone.body, {x:400,y:200})
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(137, 220, 0);
  
  drawSprites();

  ground.display();
  mango1.display();
  chain.display();
  image(tree_img,500,10,700,700);
  image(boy_img, 200,535,200,200);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX , y:mouseY})

}

function mouseReleased(){
    chain.fly()
}



