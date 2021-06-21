class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref('gameState').on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({gameState:state});
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){// it checks whether we read the playercount 
                playerCount = playerCountRef.val();
                player.getCount();

            }
            form = new Form();
            form.display();


        }
        car1 = createSprite(100,200);
        car1.addImage("car1",car1_img);

        car2 = createSprite(300,200);
        car2.addImage("car2",car2_img);

        car3 = createSprite(500,200);
        car3.addImage("car3",car3_img);

        car4 = createSprite(700,200);
        car4.addImage("car4",car4_img);

        cars = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
        player.getCarsAtEnd();


        Player.getPlayerInfo();//to get all the players's info i.e name and distance

        if(allPlayers !== undefined){
            background(rgb(222,233,244));

        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);    

        var index = 0;
        var x = 100;
        var y;

        for(var plr in allPlayers){//   player1,player2.....
        index  = index+1;
        x = x+200;
         y = displayHeight-allPlayers[plr].distance;

        cars[index-1].x = x;
         cars[index-1].y = y;

        if(index === player.index){
        cars[index-1].shapeColor = "red";
        fill("red");
        ellipse(x,y,60,60);
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index-1].y;
         }


            }

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 20;
            player.update();
        }
        if(player.distance>4160){
            gameState = 2
            player.rank += 1;
            Player.updateCarsAtEnd(player.rank);

        }

        drawSprites();

    }
    end(){
        console.log("game is finished")
        console.log(player.rank);
        var winner = createElement('h3');
        winner.position(displayWidth/2,100);
        winner.html(player.rank);

    
    }
}
