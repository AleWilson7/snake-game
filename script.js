let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d");
let box = 32;
let Snake = [];
Snake[0]={
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "Lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarcobrinha(){
    for(i=0; i < Snake.length; i++){
        context.fillStyle="green";
        context.fillRect(Snake[i].x, Snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle="red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);
function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
    
}

function iniciarJogo(){

    if(Snake[0].x > 15 * box && direction == "right") Snake[0].x = 0;
    if(Snake[0].x < 0 && direction == "left") Snake[0].x = 16 * box;
    if(Snake[0].y > 15 * box && direction == "down") Snake[0].y = 0;
    if(Snake[0].y < 0 && direction == "up") Snake[0].y = 16 * box;

    for(i=1; i < Snake.length; i++){
        if(Snake[0].x == Snake[1].y == Snake[i].y){
            clearInterval(jogo);
            alert("Game Over :(");
        }
    }

    criarBG();
    criarcobrinha();
    drawFood();

    let Snakex = Snake[0].x;
    let Snakey = Snake[0].y;

    if(direction == "right" ) Snakex += box;
    if(direction == "left") Snakex -= box;
    if(direction == "up") Snakey -= box;
    if(direction == "down") Snakey += box;

    if(Snakex != food.x || Snakey != food.y){
        Snake.pop();
    }
    else{food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    

    let newhead = {
        x: Snakex,
        y: Snakey
}

Snake.unshift(newhead);

}

let jogo = setInterval(iniciarJogo, 180);
