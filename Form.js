class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h3')
        this.reset = createButton("RESET");

    }
    display(){

        
        this.title.position(displayWidth/2-50,0)
       this.title.html("CAR RACING GAME")

        
        this.input.position(displayWidth/2-40,displayHeight/2-80);

       
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.reset.position(displayWidth-200,20);

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            database.ref('players').remove();
            database.ref("/").update({CarsAtEnd:0});

            location.reload();
        })


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();

           

             
             this.greeting.position(displayWidth/2-70,displayHeight/4);
             this.greeting.html("Hello "+player.name);

        })
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}