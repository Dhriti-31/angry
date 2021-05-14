const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Log1,log2,log3,log4,log5,log6,log7,log8,log9;
var ground1;
function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,height,1400,50);
    ground1 = new Ground(300,450,600,350)
    Log1 = new log(1300,500,70,70,PI/2);
    log2 = new log(1100,500,70,70,PI/2);
    log3 = new log(1200,450,30,270,PI/2);
    log4 = new log(1300,400,70,70,PI/2);
    log5 = new log(1100,400,70,70,PI/2);
    log6 = new log(1200,350,30,270,PI/2);
    log7 = new log(1200,250,70,70,PI/2);
    log8 = new log(1150,70,30,150,PI/4);
    //log9 = new log(1250,100,30,150,PI);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ground1.display();
    Log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
  // log9.display();
}