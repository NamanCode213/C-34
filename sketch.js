const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,390,800,15,ground_options);
    World.add(world,ground);

    
    box1=new Box(600,200,50,50)
    box2=new Box(600,200,50,50)
    b3=new Box(600,200,50,50)
    b4=new Box(600,200,50,50)

    b5=new Box(500,200,50,50)
    b6=new Box(500,200,50,50)
    b7=new Box(500,200,50,50)
    b8=new Box(500,200,50,50)
    ball=new Ball(400,200)
    C=new rope(ball.body,{x:400,y:50})
}

function draw(){
    background('lime');
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,15);
    box1.display()
    box2.display()
    b3.display()
    b4.display()

    b5.display()
    b6.display()
    b7.display()
    b8.display()
    ball.display()
    C.display()
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
    
}