//Create variables here
var  dog, happyDog
var database
var foodS, foodStock
var dogImg, happyDogImg
function preload()
{
	dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  
database= firebase.database()

  dog=createSprite(700,400,50,50)
  dog.addImage(dogImg)
  dog.scale=0.2

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
 background(46,139,87)
  drawSprites();
  //add styles here
 textSize (20)
 fill ("white")
 stroke (3)
  text ("NOTE: Press UP_ARROW TO Feed Food",200,100)


if(keyWentDown(UP_ARROW)){
  foodS--
  writeStock(foodS)
  dog.addImage(happyDogImg)
}

 

}

function readStock(data){
foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  
  database.ref('/').update({
    food:x
  })
}



