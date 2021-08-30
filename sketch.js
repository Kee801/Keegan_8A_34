var road;
var road_img;
var sky;
var sky_img;
var taj;
var taj_img;
var soldier;
var soldier_img;
var top_edge;
var bottom_edge;
var bullet;
var chakra;
var chakra_img;
var dowry;
var dowry_img;
var unp;
var unp_img;
var poverty;
var poverty_img;
var childl;
var childl_img;
var corrupt;
var corrupt_img;
var all;
var value;
var ww;
var heli;
var heli_img;
var thread;
var thread_img
var crime;
var crime_img;
var music;
var blast;
var left_edge;
var controls;
var controls_img;
var gameState = "start";

function preload()
{
  road_img = loadAnimation("indian.png");

  sky_img = loadAnimation("sea.png");

  taj_img = loadAnimation("Taj mahal 2.png");

  soldier_img = loadAnimation("soldier.gif");

  dowry_img = loadAnimation("Alien 2.png");

  chakra_img = loadAnimation("chakra 2.png");

  unp_img = loadAnimation("Unemployment.png");

  poverty_img = loadAnimation("Poverty.png");

  childl_img = loadAnimation("Child labour.png");

  corrupt_img = loadAnimation("Corruption.png");

  heli_img = loadAnimation("Black heli 2.png");

  thread_img = loadAnimation("thread2.png");

  crime_img = loadAnimation("crime.png");

  music = loadSound("Sare.mp3");

  blast = loadSound("loast.wav");

  controls_img = loadAnimation("NnewControls.png");
}


function setup()
{
  createCanvas(1530,  750);

  music.loop();

  road = createSprite(765, 610);
  road.velocityX = -10;
  road.addAnimation("road_img", road_img);
  road.scale = 0.6;

  sky = createSprite(965, 450);
  sky.addAnimation("sky_img", sky_img);
  sky.velocityX = -5;
  sky.scale = 1;
  sky.depth = road.depth-1;
  
  soldier = createSprite(100, 510)
  soldier.addAnimation("soldier_img", soldier_img);
  soldier.scale = 0.6;

  taj = createSprite(765, 200);
  taj.addAnimation("taj_img", taj_img);
  taj.depth = road.depth-1;

  top_edge = createSprite(765, 200, 1530, 10);
  top_edge.visible = false;

  bottom_edge = createSprite(765, 790, 1530, 10);
  bottom_edge.visible = true;


  bullet = createSprite(100, 1000, 30, 5);
  bullet.visible =  false;
  bullet.shapeColor = color("black");



  chakra = createSprite(750, 550);
  chakra.addAnimation("chakra_img", chakra_img);
  chakra.scale = 0.7;

  dowry = createSprite(1565, random(300, 750))
  dowry.addAnimation("dowry_img", dowry_img);
  dowry.depth = chakra.depth+1;
  dowry.scale = 0.5;
  dowry.velocityX = -13;

  unp = createSprite(2300, random(300, 750))
  unp.addAnimation("unp_img", unp_img);
  unp.depth = chakra.depth+1;
  unp.scale = 0.5;
  unp.velocityX = -13;

  poverty = createSprite(3000, random(300, 750))
  poverty.addAnimation("poverty_img", poverty_img);
  poverty.depth = chakra.depth+1;
  poverty.scale = 0.5;
  poverty.velocityX = -13;

  childl = createSprite(3500, random(300, 750))
  childl.addAnimation("childl_img", childl_img);
  childl.depth = chakra.depth+1;
  childl.scale = 0.5;
  childl.velocityX = -13;

  corrupt = createSprite(3900, random(300, 750))
  corrupt.addAnimation("corrupt_img", corrupt_img);
  corrupt.depth = chakra.depth+1;
  corrupt.scale = 0.5;
  corrupt.velocityX = -13;

  bullet.depth = chakra.depth+1;

  heli = createSprite(2000, 50);
  heli.addAnimation("heli_img", heli_img);
  heli.scale = 0.3;
  heli.velocityX = -10;

  thread = createSprite(heli.x-32, 120);
  thread.addAnimation("thread_img", thread_img);
  thread.velocityX = -10;
  thread.scale = 0.1;

  crime = createSprite(1960, 150);
  crime.velocityX = -10;
  crime.addAnimation("crime_img", crime_img);
  crime.scale = 0.3;

  left_edge = createSprite(-3, 500, 10, 500);
  left_edge.visible = false;

  controls = createSprite(765, 375);
  controls.addAnimation("controls_img", controls_img);
  controls.scale = 1.15;
}


function draw()
{
  background("white");


  if(gameState == "playing")
  {


    

  if(road.x <= 50 )
  {
    road.x = road.width/3.5;
  }

  if(keyDown("up"))
  {
    soldier.y = soldier.y-10;
  }

  if(keyDown("down"))
  {
    soldier.y = soldier.y+10;
  }

  soldier.collide(top_edge);
  soldier.collide(bottom_edge);


  if(sky.x <= 0)
  {
    sky.x = sky.width/4;
  }

  if(keyDown("space"))
  {
    blast.play();
    bullet.x = soldier.x;
    bullet.y = soldier.y;
    bullet.visible = true;
    bullet.velocityX = 15;
  }

  if(bullet.isTouching(dowry))
  {
    dowry.x = 1565;
    dowry.y = random(300, 500);
    bullet.visible = false;
    bullet.x = 5000;
  }

  if(bullet.isTouching(unp))
  {
    unp.x = 2300;
    unp.y = random(300, 500);
    bullet.visible = false;
    bullet.x = 5000;
  }

  if(bullet.isTouching(poverty))
  {
    poverty.x = 3000;
    poverty.y = random(300, 500);
    bullet.visible = false;
    bullet.x = 5000;
  }

  if(bullet.isTouching(childl))
  {
    childl.x = 3500;
    childl.y = random(300, 500);
    bullet.visible = false;
    bullet.x = 5000;
  }

  if(bullet.isTouching(corrupt))
  {
    corrupt.x = 3900;
    corrupt.y = random(300, 500);
    bullet.visible = false;
    bullet.x = 5000;
  }

  if(bullet.isTouching(crime))
  {
    thread.x = heli.x - 32;
    crime.x = 1960;
    crime.y = 150;
    bullet.visible = false;
    bullet.x = 5000;
    crime.velocityX = 0; 
  }

  if(heli.x <= 0)
  {
    heli.x = 2000;
  }

  if(thread.x <= -10)
  {
    thread.x = heli.x-32;
  }

  if(crime.x <= 750)
  {
    crime.velocityX = -5;
    crime.velocityY = 15;
  }

  if(crime.y >= 500)
  {
    crime.velocityY = 0;
    crime.velocityX = -13;
  }

  if(heli.x >= 2000)
  {
    crime.velocityX = -10;
  }

  if(poverty.isTouching(left_edge))
  {
    poverty.x = 3000;
    poverty.y = random(300, 500);
  }
  
  if(unp.isTouching(left_edge))
  {

    unp.x = 2300;
    unp.y = random(300, 500);
  }
  if(childl.isTouching(left_edge))
  {
    childl.x = 3500;
    childl.y = random(300, 500);
  }
  if(corrupt.isTouching(left_edge))
  {
    corrupt.x = 3900;
    corrupt.y = random(300, 500);
  }
  if(dowry.isTouching(left_edge))
  {
    dowry.x = 1565;
    dowry.y = random(300, 500);
  }
  if(crime.isTouching(left_edge))
  {
    thread.x = heli.x - 32;
    crime.x = 1960;
    crime.y = 150;
    crime.velocityX = 0; 
  }



  }

  if(gameState == "start")
  {
    crime.velocityX = 0; 
    dowry.velocityX = 0;
    corrupt.velocityX = 0;
    unp.velocityX = 0;
    childl.velocityX = 0;
    poverty.velocityX = 0;
    road.velocityX = 0;
    sky.velocityX = 0;
    heli.velocityX = 0;
    thread.velocityX = 0;

  }

  if(keyDown("A"))
  {
    crime.velocityX = -10; 
    dowry.velocityX = -13;
    corrupt.velocityX = -13;
    unp.velocityX = -13;
    childl.velocityX = -13;
    poverty.velocityX = -13;
    road.velocityX = -10;
    sky.velocityX = -5;
    heli.velocityX = -10;
    thread.velocityX = -10;

    controls.visible = false;

    gameState = "playing";
  }

  drawSprites();
}
