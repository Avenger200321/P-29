const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);
    ground1= new Ground(1000,200,300,20);

    box1=new Box(1000,300);
    box2=new Box(1035,300);
    box3=new Box(1070,300);
    box4=new Box(1105,300);
    box5=new Box(1000,100);
    box6=new Box(1000,100);
    ball=new Ball(200,150);
    sling=new SlingShot(ball.body,{x:205,y:220});
}

function draw(){
    background(255);
    Engine.update(engine);
     ground.display();
     ground1.display();
     ball.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    sling.fly();
}

