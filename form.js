class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
    }

display(){
    var title = createElement('h1');
    title.html("Water Surfing Game");
    title.style('font-size', '100px');
    title.style('color', 'skyblue');
    title.position(300,displayHeight/2-400);

    this.input.position(displayWidth/2-100,displayHeight/2-150);
    this.input.style('width', '200px');
    this.input.style('height', '40px');
    this.input.style('font-size', '30px');
    this.input.style('background', 'lavender');

    this.button.position(displayWidth/2-50,displayHeight/2-50);
    this.button.style('width', '100px');
    this.button.style('height', '40px');
    this.button.style('background', 'lightpink');

    this.button.mousePressed(()=>{
        if(this.input.value !== undefined){
        title.hide();
        this.input.hide();
        this.button.hide();
        gameState = 1;
        }
    })

}

}