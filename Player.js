class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = null;
    }

    update(){

        var playerIndex = "players/player"+this.index;// to referinside the node i.e players/player1
        database.ref(playerIndex).set({name:this.name,distance:this.distance});//to update the database with name and distance

    }

//get the playercount
    updateCount(count){
        database.ref('/').update({playerCount:count});

    }


    getCount(){
        var playerCountRef = database.ref('playerCount').on("value",(data)=>{
            playerCount = data.val();

        })
    }


    static getPlayerInfo(){//when u call a function using class name , the funaction should be static function
        var playerInfoRef = database.ref('players').on("value",(data)=>{
            allPlayers = data.val();

        })

    }
    getCarsAtEnd(){
        database.ref('CarsAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    static updateCarsAtEnd(rank){
        database.ref('/').update({CarsAtEnd:rank});

    }
}