var snowbg
var snow,snow1,snow2,snow3,snow4,snow5,snow6

function preload(){
  snowbg=loadImage("snow2.jpg")
  snow=loadAnimation("Snow7.png","snow25.png")

}





function setup() {
  createCanvas(1000,600);
  snow1=createSprite(500,200,20,20)
  snow1.addAnimation("s",snow)
  snow1.scale=0.2
  snow2=createSprite(250,100,20,20)
  snow2.addAnimation("s",snow)
  snow2.scale=0.2
  snow3=createSprite(100,400,20,20)
  snow3.addAnimation("s",snow)
  snow3.scale=0.2
  snow4=createSprite(300,150,20,20)
  snow4.addAnimation("s",snow)
  snow4.scale=0.2
  snow5=createSprite(300,400,20,20)
  snow5.addAnimation("s",snow)
  snow5.scale=0.2
  snow6=createSprite(400,200,20,20)
  snow6.addAnimation("s",snow)
  snow6.scale=0.2
}

function draw() {
  background(snowbg);  
  drawSprites()
}