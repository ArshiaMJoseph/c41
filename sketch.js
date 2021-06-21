var database;
var gameState = 0;
var playerCount;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;
var distance = 0;
var car1_img,car2_img,car3_img,car4_img;
var track;


function preload(){
    car1_img=loadImage("car1.png") ;
    car2_img=loadImage("car2.png") ;
    car3_img=loadImage("car3.png") ;
    car4_img=loadImage("car4.png") ;
    track = loadImage("track.jpg")

}


function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  
}

function draw(){
   

    if(playerCount === 4){
        game.update(1);

    }
    if(gameState === 1){
        clear();
        game.play();

    }
    if(gameState === 2){
        game.end()
    }

}
