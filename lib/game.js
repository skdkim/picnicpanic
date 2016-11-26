import Basket from './basket';
import Fruit from './fruit';

class Game {
  constructor(basket){
    this.basket = basket;
  }

  addBasket(){
    const basket = new Basket(40, 40, 40, 40);
    console.log("basket added");
  }
}

export default Game;
