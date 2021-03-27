class Ball {
    constructor(x, y) {
      var options = {
          'frictionAir':0.0005,
          'density':1
      }
      this.body = Bodies.circle(x, y,30, options);
      this.r = 30      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);     
      fill("yellow");
      ellipse(0, 0,this.r,this.r);
      pop();
    }
  };