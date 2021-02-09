
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy,a
var elastic;

function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);
  
	engine = Engine.create();
	world = engine.world;
  boy = new Boy();
	mango1 = new mango(1080,180,30);
	mango2 = new mango(1000,75,30);
	mango3 = new mango(1190,175,30);
	mango4 = new mango(900,200,30);
	mango5 = new mango(1150,100,30);

  

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  stoneObj = new Stone(240,415,30,30);
  elastic = new Elastic(stoneObj.body,{x:240,y:415});
	Engine.run(engine);

}

function draw() {
  background("cyan")
  
  textSize(24);
  text("PRESS SPACE TO GET A CHANCE TO PLAY", 200,200);

  boy.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();
  elastic.display();
  
  if(keyWentDown("space")){
    Matter.Body.setPosition(stoneObj.body,{x:240,y:415});
    elastic.a(stoneObj.body);
  }
  
  groundObject.display();
  
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
 
}

function  mouseDragged(){ 
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function  mouseReleased(){
  elastic.w();
}

  function detectCollision(lstone,lmango){
    stoneObjBodyPosition = lstone.body.position;
    mangoBodyPosition = lmango.body.position;
  
    var distance = dist(stoneObjBodyPosition.x, stoneObjBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance <= lmango.r + lstone.r){
      Matter.Body.setStatic(lmango.body, false);
    }
  }