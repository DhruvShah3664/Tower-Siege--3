const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var score = 0;
function setup(){

    createCanvas(1000, 600);

    

    engine = Engine.create();
    world = engine.world;
  
    ground1 = new Ground(490, 395, 350, 15);
   
    //level 6 blocks
    block1 = new BlueBox(370, 350, 35, 45);
    block2 = new BlueBox(410, 350, 35, 45);
    block3 = new BlueBox(450, 350, 35, 45);
    block4 = new BlueBox(490, 350, 35, 45);
    block5 = new BlueBox(530, 350, 35, 45);
    block6 = new BlueBox(570, 350, 35, 45);
    block7 = new BlueBox(610, 350, 35, 45);

    //level 5 blocks
    block8 = new GreenBox(390, 310, 35, 45);
    block9 = new GreenBox(430, 310, 35, 45);
    block10 = new GreenBox(470, 310, 35, 45);
    block11 = new GreenBox(510, 310, 35, 45);
    block12 = new GreenBox(550, 310, 35, 45);
    block13 = new GreenBox(590, 310, 35, 45);

    //level 4 blocks

    block14 = new OrangeBox(410, 260, 35, 45);
    block15 = new OrangeBox(450, 260, 35, 45);
    block16 = new OrangeBox(490, 260, 35, 45);
    block17 = new OrangeBox(530, 260, 35, 45);
    block18 = new OrangeBox(570, 260, 35, 45);

    //level 3 blocks
    block19 = new PinkBox(430, 215, 35, 45);
    block20 = new PinkBox(470, 215, 35, 45);
    block21 = new PinkBox(510, 215, 35, 45);
    block22 = new PinkBox(550, 215, 35, 45);

    //level 2 blocks
    block23 = new GreyBox(450, 175, 35, 45);
    block24 = new GreyBox(490, 175, 35, 45);
    block25 = new GreyBox(530, 175, 35, 45);

    //level 1 block
    block26 = new WhiteBox(490, 130, 35, 45);

    ground2 = new Ground(780, 240, 160, 15);

    //level 3 blocks
    block27 = new BlueBox(740, 200, 35, 45);
    block28 = new BlueBox(780, 200, 35, 45);
    block29 = new BlueBox(820, 200, 35, 45);

    //level 2 blocks
    block30 = new GreyBox(760, 150, 35, 45);
    block31 = new GreyBox(800, 150, 35, 45);

    //level 1 block
    block32 = new WhiteBox(780, 110, 35, 45);

    ball = new Ball(150, 350, 50);

    chain = new Slingshot(ball.body,{x:150,y:350});
}

function draw() {
   background(0);
    Engine.update(engine);  

    text("SCORE :" +score,750,40);
    textSize("20");
    fill("Orange");

    ground1.display();
    ground2.display();
    
    block1.display();
    block2.display();
    block3.display(); 
    block4.display(); 
    block5.display();
    block6.display();
    block7.display();
    
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();  

    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();
    block21.display();
    block22.display();

    block23.display();
    block24.display();
    block25.display();

    block26.display();

    block27.display();
    block28.display();
    block29.display();

    block30.display();
    block31.display();

    block32.display();

    ball.display();

    chain.display();

    
    block1.score();
    block2.score();
    block3.score(); 
    block4.score(); 
    block5.score();
    block6.score();
    block7.score();
    
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();  

    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();

    block19.score();
    block20.score();
    block21.score();
    block22.score();

    block23.score();
    block24.score();
    block25.score();

    block26.score();

    block27.score();
    block28.score();
    block29.score();

    block30.score();
    block31.score();

    block32.score();

    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    chain.release();
  }

  function keyPressed(){
    if(keyCode === 32){
        chain.attach(ball.body);
    }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "Orange.jpg";
  }
  else{
      bg = "Black Background.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}





