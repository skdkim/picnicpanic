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

  draw(ctx, x, clrWidth, clrHeight){
    // debugger
    ctx.clearRect(0,0,clrWidth, clrHeight);
    ctx.fillStyle = "red";
    // ctx.fillRect(x - (this.destWidth / 2), this.y, this.destWidth, this.destHeight);
    ctx.drawImage(this.img, x - (this.destWidth / 2), this.y, this.destWidth, this.destHeight);
    this.drawn = true;
    // debugger
  }
}

module.exports = Basket;
