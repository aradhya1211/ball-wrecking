const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var bobs;
var brick1, brick2, brick3 , brick4, brick5;



function preload() {

    
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,600,1200,30);
    bobs = new Bob(250,250,100,100);
    rope = new Rope(bobs.body,{x:400,y:50});
    brick1 = new Brick(700,100,50,50);
    brick2 = new Brick(700,100,50,50);
    brick3 = new Brick(500,100,50,50);
    brick4 = new Brick(600,100,50,50);
    brick5 = new Brick(600,100,50,50);

      


}

function draw(){
    background("yellow")

    // add condition to check if any background image is there to add


    Engine.update(engine);
    ground.display();
    bobs.display();
    rope.display();
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();



    // write code to display time in correct format here


}

function mouseDragged(){
    Matter.Body.setPosition(bobs.body,{x:mouseX , y:mouseY});   
}

