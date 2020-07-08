const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world, engine;

var particles = [];
var divisions = [];
var plinkos = [];

var divisionHeight = 300;

function preload() {
    
}

function setup() {
    createCanvas(800, 800);

    engine = Engine.create();
    world = engine.world;

    ground = Bodies.rectangle(width / 2, height - 15, width, 30, { isStatic: true });
    World.add(world, ground);

    for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
    }

    for (var j = 40; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 75, 10));
    }

    for (var j = 15; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 175, 10));
    }

    for (var j = 40; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 275, 10));
    }

    for (var j = 15; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 375, 10));
    }

    Engine.run(engine);
}

function draw() {
    background(0);

    rectMode(CENTER);
    fill("blue");
    rect(ground.position.x, ground.position.y, width, 30);

    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }

    for (var div = 0; div < divisions.length; div++) {
        divisions[div].display();
    }

    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(100, 700), 10, 10));
    }

    for (var part = 0; part < particles.length; part++) {
        particles[part].display();
    }

    drawSprites();
}