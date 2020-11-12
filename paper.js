class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            density:1.2,
            restituion:0.3,
            friction:0.5,

        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    display(){
        strokeWeight = 1
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,20);
    }
}