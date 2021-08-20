const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  var options={
  restitution:0.5
  }
ball1=Bodies.circle(200,20,10,options);
World.add(world,ball1);
  rectMode(CENTER);
  ellipseMode(RADIUS);
   
  button1=createImg("right.png");
  button1.position(220,30);
  button1.size(50,50);
  button1.mouseClicked(Hforce);


  button2=createImg("up.png");
  button2.position(100,30);
  button2.size(50,50);
  button2.mouseClicked(Vforce);
}

function Hforce (){

Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.01,y:0})
}

function Vforce (){

  Matter.Body.applyForce(ball1,{x:0,y:0},{x:0,y:-0.01})
  }










function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
ellipseMode(RADIUS)
ellipse(ball1.position.x,ball1.position.y,10);
}

