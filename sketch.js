const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var world;
var box1;

var connection;
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15, 
    box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,
    box29;

var stand1,stand2;
var ball;

var ground1;


function preload() {
     
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(500,300,450,10);
    stand2 = new Ground(900,250,450,10);

    box  = new Box(430,290,50,50);
    box2 = new Box(450,290,50,50);
    box3 = new Box(470,290,50,50);
    box4 = new Box(490,290,50,50);
    box5 = new Box(510,290,50,50);

    box6 = new Box1(445,250,40,40);
    box7 = new Box1(465,250,40,40);
    box8 = new Box1(485,250,40,40);
    box9 = new Box1(505,250,40,40);

    box10 = new Box2(460,230,30,30);
    box11 = new Box2(480,230,30,30);
    box12 = new Box2(500,230,30,30);

    box13 = new Box3(465,210,20,20);
    box14 = new Box3(485,210,20,20);

    box15 = new Box4(475,160,20,20);

    box16 = new Box5(900,240,40,40);
    box17 = new Box5(860,240,40,40);
    box18 = new Box5(940,240,40,40);
    box19 = new Box5(820,240,40,40);
    box20 = new Box5(980,240,40,40);

    box21 = new Box6(920,200,40,40);
    box22 = new Box6(890,200,40,40);
    box23 = new Box6(950,200,40,40);
    box24 = new Box6(860,200,40,40);

    box25 = new Box7(890,160,40,40);
    box26 = new Box7(930,160,40,40);
    box27 = new Box7(880,160,40,40);

    box28 = new Box8(930,120,40,40);
    box29 = new Box8(890,120,40,40);

    

    ball = new Ball(100,200,44);

    connection = new slingshot({x:100,y:200},ball.body);
  }
function draw(){
    background(0);    
    Engine.update(engine);

    stand1.display();
    stand2.display();

    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display(); 
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    
    connection.display();
    
    ball.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  connection.fly();
}