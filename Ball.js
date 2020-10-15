class Ball {

    constructor (x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("polygon.png")
        

        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2,
        }

        this.body = Bodies.polygon(this.x,this.y,6,this.radius/2,options);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();

    }

};