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
    this.y = -35;
    this.width = 35;
    this.height = 35;

    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;

    this.fruits = {};
    this.count = 0;
  }

  create(){
    while (Object.keys(this.fruits).length < 5 && this.count <= 20){
      this.fruits[this.count] = {
        x: Math.floor(Math.random() * (600)),
        y: this.y,
        width: this.width,
        height: this.height
      };
      this.count++;
    }
  }

  compost(){
    for (let fruit in this.fruits){

      if (this.fruits[fruit].y > 600) {
        delete this.fruits[fruit];
      }
    }
    // this.fruits = this.fruits.filter( fruit => {
    //   fruit.y > 300;
    // });
  }

  update(){
    for (let fruit in this.fruits){
      this.fruits[fruit].y += this.speedY + this.gravity;
    }
    // this.gravitySpeed += this.gravity;
    // fruit.x += this.speedX;
    // this.y += this.speedY + this.gravitySpeed;
    // this.hitBottom();
  }

  draw(ctx) {
    // this.create();
    // ctx.clearRect(0,0,clrWidth, clrHeight);
    for (let fruit in this.fruits){
      ctx.drawImage(this.apple, this.fruits[fruit].x, this.fruits[fruit].y, this.fruits[fruit].width, this.fruits[fruit].height);
    }
    // this.fruits.forEach( fruit => {
      // this.update(fruit);
    // });
  }

}

module.exports = Fruit;
