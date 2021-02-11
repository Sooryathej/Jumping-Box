var canvas;
var s1, s2, s3, s4;
var box, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800, 600);

    s1 = createSprite(100, 595, 200, 10);
    s1.shapeColor = ("red");

    s2 = createSprite(300, 595, 200, 10);
    s2.shapeColor = ("green");

    s3 = createSprite(500, 595, 200, 10);
    s3.shapeColor = ("blue");

    s4 = createSprite(700, 595, 200, 10);
    s4.shapeColor = ("orange");

    box = createSprite(random(20, 750), 100, 20, 20);
    box.shapeColor = rgb(255, 255, 255);
    box.velocityX = 4;
    box.velocityY = 9;
}

function draw() {
    background(rgb(169, 169, 169));

    edges = createEdgeSprites();

    box.bounceOff(edges);

    if(s1.isTouching(box) && box.bounceOff(s1)){
        box.shapeColor = ("red");
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
        music.stop();
    }

    if(s2.isTouching(box)){
        box.shapeColor = ("green");
    }

    if(s3.isTouching(box) && box.bounceOff(s3)){
        box.shapeColor = ("blue");

    }

    if(s4.isTouching(box) && box.bounceOff(s4)){
        box.shapeColor = ("orange");
        music.play();

    }

    drawSprites();
}