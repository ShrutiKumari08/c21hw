var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  
 
   
 }

function draw() {
  background("skyblue");
  for (var i=0; i<6;i++){

    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if (i % 2 === 0)
    {
      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
      road.shapeColor = "black";    
    }
    bottomGrass1.shapeColor = "green";
  }
 
 //creating car rows
 for (var i=0;i<40;i++){
   cars = new Car(2);
   carGroup1.add(cars.spt);
 }

 for (var i=0; i<-40; i++){
  cars = new Car(2);
  carGroup1.add(cars.spt);
}

//creating log rows
 for (var i=0;i<40;i++){
   logs = new Log(2);
   logGroup1.add(logs.spt);
 }

 for (var i=0;i<-40;i++){
  logs = new Log(2);
  logGroup1.add(logs.spt);
}

 
 //making the logs reappear
   for (i=1;i<logGroup1.length; i++){
    if (logGroup1[i].x < 0)
    {
      logGroup1[i].x = width;
    }
   }  
 
 //making the cars reappear 
 for (i=1; i<carGroup1.length; i++){
     if (carGroup1[i].x < 0)
     {
       carGroup1[i].x = width;
     }   
 
 }
 
 //drawing all the sprites
   drawSprites();
 }
 

  