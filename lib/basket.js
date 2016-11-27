class Basket {
  constructor(x){
    // this.width = width;
    // this.height = height;
    // this.color = color;

    this.img = new Image();
    this.img.src = './assets/images/basket.png';
    // this.drawn = false;
    this.x = x;
    this.y = 600 - 48;
    this.destWidth = 48 * 2;
    this.destHeight = 48;
  }

  create(){
  }

  draw(ctx){
    // debugger
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.destWidth, this.destHeight);
    // ctx.drawImage(this.img, this.x, this.y);
    // this.drawn = true;
    // debugger
  }

  update(movement){
    this.x += movement;
  }

  clear(ctx, width, height){
    ctx.clearRect(0, 0, width, height);
  }
}

module.exports = Basket;
