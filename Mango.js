class Mango {
    constructor(x, y,diameter) {
      var options = {
          'isStatic': true,
          'restitution':0,
          'friction':1
      }
      this.body = Bodies.circle(x,y,diameter,options);
      this.radius = diameter
      this.image = loadImage("mango1.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      imageMode(CENTER)     
      image(this.image,0, 0, this.diameter,[width],[height]);
      pop();
    }
  };