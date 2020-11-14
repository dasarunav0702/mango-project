
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImage;
var boy, boyImage;

function preload()
{
	treeImage= loadImage("Plucking mangoes/tree.png");
  boyImage= loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);

  engine= Engine.create();
  world= engine.world;

  tree = createSprite(500,300,100,10)
  tree.addImage(treeImage);
  tree.scale=0.4;

  boy = createSprite(100,500,10,10 );
  boy.addImage(boyImage);
  boy.scale=0.1;
  
  

  mango1= new Mango(400,150,50,50);
  mango2= new Mango(450,180,50,50);
  mango3= new Mango(320,200,50,50);
  mango4= new Mango(480,230,50,50);
  mango5= new Mango(460,260,50,50);
  mango6= new Mango(420,250,50,50);
  mango7= new Mango(580,150,50,50);
  mango8= new Mango(530,180,50,50);
  mango9= new Mango(490,200,50,50);
  mango10= new Mango(550,250,50,50);
  
  

  stone1= new Stone(150,550,30,30);
  
  chain = new Chain(stone1.body,{x:130,y:500});

	Engine.run(engine);
  world = engine.world;
}


function draw() {
  
  background("white");
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();    
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone1.display();
  chain.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}

function detectcollision(lstone,lmango ){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);
  detectcollision(stone1,mango8);
  detectcollision(stone1,mango9);
  detectcollision(stone1,mango10);
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r){
       Matter.Body.setStatic(lmango.body,false)
    }

} 


function keyPressed(){
    if (keyCode===32){
      Matter.Body.setPosition(stone1.body,{x:235,y:420})
      chain.attach(bird.body);
    }
}

