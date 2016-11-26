const Basket = require('./basket');
const Fruits = require('./fruit');
document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("canvas");
  const ctx = canvasEl.getContext("2d");

  let basket;
  let fruits;
  // const game = new Game();
  // new GameView(game, ctx).start();

  const newGame = () => {
    // debugger
    basket = new Basket(30, 30, "blue", 10, 120);
    basket.draw(ctx);
    ctx.fillStyle = "blue";
    ctx.fillRect(30,30,10,120);
    fruits = new Fruits();
  };

  newGame();
});
