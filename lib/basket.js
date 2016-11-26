class Basket {
  constructor(x, y, width, color ,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;


  }

  create(){
  }

  draw(ctx){
    // debugger
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(movement){
    this.x += movement;
  }

  clear(ctx, width, height){
    ctx.clearRect(0, 0, width, height);
  }
}

module.exports = Basket;
