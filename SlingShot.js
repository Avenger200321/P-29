class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.rBand=loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

   fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,225,50,150);
        image(this.sling2,175,230,40,80);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill("white");
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
           stroke(48,22,8);
            if(pointA.x < 220) {
                push();
                strokeWeight(7);
                line(pointA.x - 25, pointA.y+10, pointB.x -10, pointB.y+20);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y + 15);
                image(this.rBand,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.rBand,pointA.x + 25, pointA.y -10,15,30);
                pop();
            }
        }
    }
    
}