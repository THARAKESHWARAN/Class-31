class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.array = [];
  }

  display() { 
    super.display();

    if (this.body.speed > 10) {
      var posX = this.body.position.x;
      var posY = this.body.position.y;
      this.array.push([posX, posY]);
    }
    
  }

  drawSmoke() {
    for (var i = 0; i < this.array.length; i++) {
      image(this.smoke, this.array[i][0], this.array[i][1]);
    }
  }
}
