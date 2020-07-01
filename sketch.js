var canvas,backgroundImg;
var playerCount;
var database;
var form;
var question1,question2,question3;

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    form = new Form();
    form.display();
}

function draw(){}