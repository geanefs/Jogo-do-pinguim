var fundo;
var pinguim,pinguimimg;
var telainicial;

function preload(){
   //pinguimimg = loadImage("img/")
}

function setup(){
    createCanvas(400,400)
    pinguim = createSprite(200,200,30,30)
    //pinguim.addImage(pinguimimg)
}

function draw(){
    background('pink')

    drawSprites()

}