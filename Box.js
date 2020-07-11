class Box  {
  constructor(x, y){
    
    var options = {
            'restitution':0.8,
            'friction':1.5,
            'density':1.0
            
        }
        this.body = Bodies.rectangle(x, y, 30, 50, options);
        this.width = 30;
        this.height = 50;
        
       
        World.add(world, this.body);
  }
 display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        push();
        fill(random(0,200),random(0,200),random(0,200));
        pop();
        rect( 0, 0, this.width, this.height);
        pop();
      }
};
