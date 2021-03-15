class Plane{
constructor(x,y){
this.x = x;
this.y = y;
this.image = loadImage("plane.png");
 World.add(world, this.body);
}

display(){
push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 40, 10);
        pop();
}
}