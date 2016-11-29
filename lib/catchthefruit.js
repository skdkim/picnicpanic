const Basket = require('./basket');
const Fruits = require('./fruit');
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  let basket;
  let fruits;
  let mouseX;
  let globalID;
  let currentTotal;
  let paused = false;
  let stdGame = 25;
  let endlessMode = false;


  const getMousePos = (e) => {
    let rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left
    };
  };

  canvas.addEventListener('mousemove', (e) => {
    mouseX = getMousePos(e).x;
  }, false);

  document.getElementById('htp').addEventListener(('click'), () => {
    document.getElementById('htp-info').className = '';
    document.getElementById('start-screen').className = 'v-h';
  });

  document.getElementById('abt').addEventListener(('click'), () => {
    document.getElementById('abt-info').className = '';
    document.getElementById('start-screen').className = 'v-h';
  });

  document.getElementById('htp-exit').addEventListener(('click'), () => {
    document.getElementById('htp-info').className = 'v-h';
    document.getElementById('start-screen').className = '';
  });

  document.getElementById('abt-exit').addEventListener(('click'), () => {
    document.getElementById('abt-info').className = 'v-h';
    document.getElementById('start-screen').className = '';
  });

  document.getElementById('start').addEventListener(('click'), () => {
    document.getElementById('start-screen').className = 'v-h';
    endlessMode = false;
    newGame();
  });

  document.getElementById('re-start').addEventListener(('click'), () => {
    document.getElementById('game-over').className = 'v-h';
    endlessMode = false;
    newGame();
  });

  window.addEventListener('keydown', e => {
    if (e.keyCode === 81){
      cancelAnimationFrame(globalID);
      ctx.clearRect(0,0,canvas.width, canvas.height);
      document.getElementById('start-screen').className = '';
    }
  });

  window.addEventListener('keydown', e => {
    if (e.keyCode === 69){
      endlessMode = true;
    }
  });

  const newGame = () => {
    // debugger
    basket = new Basket(mouseX);
    fruits = new Fruits();
    update();
    // debugger
  };

  const update = () => {
    // debugger
    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.font = '30px arial';
    ctx.fillStyle = 'monospace';
    ctx.fillText(`Caught: ${fruits.caughtCount()}`, 0, 30);
    ctx.fillText(`Missed: ${fruits.missedCount()}`, 160, 30);
    currentTotal = fruits.caughtCount() + fruits.missedCount();
    ctx.fillText(`Accuracy: ${Math.round((fruits.caughtCount() / currentTotal || 0) * 100)} %`, 320, 30);
    if(endlessMode){
      ctx.fillText("ENDLESS MODE!!!",0, 95);
    }

    // console.log(fruits.caught);
    basket.draw(ctx, mouseX);

    globalID = requestAnimationFrame(update);
    gameOver();

    fruits.create();
    fruits.draw(ctx);
    fruits.update();
    fruits.compost();
    fruits.scoreKeeper(mouseX);
    //
    // ctx.fillStyle = "red";
    // ctx.fillRect(mouseX - 50, 600 - 48, 100, 100);
  };

  const gameOver = () => {
    if (fruits.caughtCount() + fruits.missedCount() >= stdGame && !endlessMode) {
      cancelAnimationFrame(globalID);
      document.getElementById('game-over').className = '';
      // globalID = requestAnimationFrame(update);

    }
  };

  // const animate = () => {
  //   update();
  //   // globalID = requestAnimationFrame(animate);
  // };
});
