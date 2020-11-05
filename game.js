class Game{
    constructor(){
        this.choice=0;
        this.button1 = createButton("Select");
        this.button2 = createButton("Select");
        this.button3 = createButton("Select");
        this.button4 = createButton("START");
    }

    start(){

        if (gameState === 0){
        this.button1.show();
        this.button2.show();
        this.button3.show();
        this.button4.show();
        form = new Form();
        form.display();    
    }
    
}
choosePlayer(){
    image(player1_img,100,50,300,400);
    image(player2_img,600,50,300,450);
    image(player3_img,1000,50,300,450);
   
    
    this.button1.position(250,500);
    this.button2.position(700,500);
    this.button3.position(1100,500);
    this.button4.position(620,580);
    this.button4.style('height', '40px');
    this.button4.style('width', '200px');
    this.button4.style('background', 'pink');
    if(this.choice===1){
        console.log("hey")
        this.button1.style("backgroundColor","red");
        
    }
    if(this.choice===2){
        this.button2.style("backgroundColor","red");
    }
    if(this.choice===3){
        this.button3.style("backgroundColor","red");
    }


    this.button1.mousePressed(()=>{
        console.log("hello")
        this.choice=1;  
    }) 
    this.button2.mousePressed(()=>{
        console.log("hi")
        this.choice=2;
    })
    this.button3.mousePressed(()=>{
        this.choice=3;
    }) 
    
   
    this.button4.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        if(this.choice===1){
            player.addImage(player1_img);
        }
        else if(this.choice===2){
            player.addImage(player2_img);
         
        }
        else if(this.choice===3){
            player.addImage(player3_img);
        }
        gameState = 2;
       
    })
    
}

play(){
   drawSprites();
}
}
