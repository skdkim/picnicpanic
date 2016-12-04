class Basket {
  constructor(x, basketHeight){
    this.img = new Image();
    this.img.src = './assets/images/basket.png';
    this.x = x;
    this.y = 600 - 48;
    this.width = 48 * 2;
    this.height = basketHeight;
  }

  draw(ctx, x, basketHeight){
    ctx.drawImage(this.img, x - (this.width / 2), this.y, this.width, basketHeight);
  }
}

module.exports = Basket;
