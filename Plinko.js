class Plinko {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            'restitution': 0.5,
            'friction': 0.8,
            'density': 1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("indigo");
        circle(0, 0, this.radius);
        pop();
    }
};