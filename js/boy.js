class Boy {
    constructor(x,y) {
      var options = {
          'friction':1,
          'density':1.5,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 300;
      this.height = 400;
      this.image = loadImage("images/boy.png");
      
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      image(this.image,330,500, this.width, this.height);
    }
  }