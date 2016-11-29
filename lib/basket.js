class Basket {
  constructor(x){
    this.img = new Image();
    this.img.src = './assets/images/basket.png';
    this.x = x;
    this.y = 600 - 48;
    this.width = 48 * 2;
    this.height = 48;
  }

  draw(ctx, x){
    ctx.drawImage(this.img, x - (this.width / 2), this.y, this.width, this.height);
  }
}

module.exports = Basket;
