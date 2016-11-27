class Fruit {
  constructor (){
    this.apple = new Image();
    // this.orange = new Image();
    // this.watermelon = new Image();
    this.apple.src = './assets/images/apple.png';
    // this.orange.src = './assets/images/orange.png';
    // this.watermelon.src = './assets/images/watermelon.png';
    // this.x = Random number
    this.x = 0;
    this.y = 0;
    this.width = 35;
    this.height = 35;

    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.005;
    this.gravitySpeed = 0;

    this.fruits = [];
  }

  create(){
    if (this.fruits.length < 10){
      this.fruits.push({
        x: Math.floor(Math.random() * (600)),
        y: this.y,
        width: this.width,
        height: this.height
      });
    }
  }

  update(){
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    // this.hitBottom();
    this.create();
  }

  draw(ctx, clrWidth, clrHeight) {
    // ctx.clearRect(0,0,clrWidth, clrHeight);
    this.fruits.forEach( fruit => {
      ctx.drawImage(this.apple, fruit.x, fruit.y, fruit.width, fruit.height);
    });
    this.update();
  }

}

module.exports = Fruit;
