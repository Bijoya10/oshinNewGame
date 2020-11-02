class Game{
    constructor(){
        
    }

    start(){
        if (gameState === 0){
        form = new Form();
        form.display();    
    }
    
}
choosePlayer(){
    image(player1_img,100,50,300,400);
    image(player2_img,600,50,300,450);
    image(player3_img,1000,50,300,450);
    var button1 = createButton("Select");
    var button2 = createButton("Select");
    var button3 = createButton("Select");
    var button4 = createButton("START");
    button1.position(250,500);
    button2.position(700,500);
    button3.position(1100,500);
    button4.position(620,580);
    button4.style('height', '40px');
    button4.style('width', '200px');
    button4.style('background', 'pink');

    button1.mousePressed(function(){
        button1.style('background','red');
        player.addImage(player1_img);
          
    }) 

    button2.mousePressed(function(){
        button3.style('background','red');
        player.addImage(player2_img);
         
    }) 

    button3.mousePressed(function(){
        button3.style('background','red');
        player.addImage(player3_img);
      
    }) 

    button4.mousePressed(function(){
        gameState = 2;
        button1.hide();
        button2.hide();
        button3.hide();
        button4.hide();
    })
}

play(){
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
}
}
