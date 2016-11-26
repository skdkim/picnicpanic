class GameView {
  constructor(game, ctx){
    this.game = game;
    this.ctx = ctx;

    this.basket = this.game.addBasket();
  }


}

export default GameView;
