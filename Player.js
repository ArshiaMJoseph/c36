class Player{
    constructor(){}

    update(name1){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({name:name1});

    }
    updateCount(count){
        database.ref('/').update({playerCount:count});

    }
    getCount(){
        var playerCountRef = database.ref('playerCount').on("value",function(data){
            playerCount = data.val();

        })
    }
}