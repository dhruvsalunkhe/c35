var gameState =0;
var database , playerCount;
var form,player,game;
function setup(){
    //createCanvas(800,800);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");












}