class Form{
    constructor(){}
    display(){

        var title = createElement('h2');
        title.position(250,0)
        title.html("CAR RACING GAME")

        var input = createInput("Name");
        input.position(250,160);

        var button = createButton("PLAY");
        button.position(450,200);


        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;
            player.updateCount(playerCount);
            player.update(name);

           

             var greeting = createElement('h3')
             greeting.position(130,160);
             greeting.html("Hello "+name);

        })
    }
}