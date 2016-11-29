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
    this.gravity = 20;
    this.gravitySpeed = 0;

    this.fruits = {};
    this.count = 0;

    this.caught = 0;
    this.missed = 0;

    this.thumpSound = new Audio('./assets/sounds/thump.mp3');
    this.thumpSound.preload = 'auto';
    this.thumpSound.load();

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

  caughtCount(){
    return this.caught;
  }

  missedCount(){
    // return Math.floor(this.missed / 1000);
    return Math.floor(this.missed / 2);
  }

  basketCaught(fruit, mouseX){
    // debugger
    // check to see if the fruit is within the width of the basket
    if (fruit.x > mouseX - 48 && fruit.x < mouseX + 48){
      let sound = this.thumpSound.cloneNode();
      sound.play();
      return true;
    }
    return false;
  }

  scoreKeeper(mouseX){
    // debugger
    for (let fruit in this.fruits){
      if (this.fruits[fruit].y >= 550){
        if (this.basketCaught(this.fruits[fruit], mouseX)) {
          this.caught++;
          delete this.fruits[fruit];
        } else {
          this.missed++;
        }
      }
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
