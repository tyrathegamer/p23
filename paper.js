class Paper {
    constructor(x,y, radius){    
    var options ={
        restitution: 0,
        friction: 1.0,
        density: 1.2
     }
     this.body = Bodies.circle(x,y,radius, options);
     this.radius = radius;
     World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;
    fill("purple");
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.radius);
  }
};