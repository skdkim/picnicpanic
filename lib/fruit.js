class Fruit {
  constructor (){
    this.apple = new Image();
    // this.orange = new Image();
    // this.watermelon = new Image();
    this.apple.src = './assets/images/apple.png';
    // this.orange.src = './assets/images/orange.png';
    // this.watermelon.src = './assets/images/watermelon.png';
    this.x = 0;
    this.y = -35;
    this.width = 35;
    this.height = 35;

    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 13;
    this.gravitySpeed = 0;

    this.fruits = {};
    this.count = 0;

    this.caught = 0;
    this.missed = 0;

    this.justCaught = false;

    this.thumpSound = new Audio('./assets/sounds/thump.mp3');
  }

  create(){
    while (Object.keys(this.fruits).length < 1){
      this.fruits[this.count] = {
        x: Math.floor(Math.random() * (565)),
        y: this.y,
        width: this.width,
        height: this.height
      };
      this.count++;
    }
  }

  didCatch(){
    return this.justCaught;
  }

  caughtCount(){
    return this.caught;
  }

  missedCount(){
    // return Math.floor(this.missed / 2);
    return this.missed;
  }

  basketCaught(fruit, mouseX){
    if (fruit.x > mouseX - 48 && fruit.x < mouseX + 48){
      let sound = this.thumpSound.cloneNode();
      sound.play();
      this.justCaught = true;
      return this.justCaught;
    } else {
      this.justCaught = false;
    }
    return this.justCaught;
  }

  scoreKeeper(mouseX){
    for (let fruit in this.fruits){
      if (this.fruits[fruit].y >= 200){
        this.justCaught = false;
      }

      if (this.fruits[fruit].y >= 550){
        if (this.basketCaught(this.fruits[fruit], mouseX)) {
          this.caught++;
          delete this.fruits[fruit];
        }
      }
    }
  }

  compost(){
    for (let fruit in this.fruits){
      if (this.fruits[fruit].y > 600) {
        this.missed++;
        delete this.fruits[fruit];
      }
    }
  }

  update(){
    for (let fruit in this.fruits){
      this.fruits[fruit].y += this.speedY + this.gravity;
    }
  }

  draw(ctx) {
    for (let fruit in this.fruits){
      ctx.drawImage(this.apple, this.fruits[fruit].x, this.fruits[fruit].y, this.fruits[fruit].width, this.fruits[fruit].height);
    }
  }
}

module.exports = Fruit;
