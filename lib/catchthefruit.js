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
  let topBg;
  let paused = false;
  let stdGame = 25;
  let endlessMode = false;
  let basketHeight = 48;


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
      document.getElementById('game-over').className = 'v-h';
    }
  });

  window.addEventListener('keydown', e => {
    if (e.keyCode === 69){
      endlessMode = true;
    }
  });

  const newGame = () => {
    basket = new Basket(mouseX, basketHeight);
    fruits = new Fruits();
    update();
  };

  const update = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(76, 128, 66, 0.5)';
    ctx.fillRect(0,0,600,45);

    ctx.font = '30px monospace';
    ctx.fillStyle = 'black';
    ctx.fillText(`Caught:${fruits.caughtCount()} Missed:${fruits.missedCount()} Accuracy:${Math.round((fruits.caughtCount() / currentTotal || 0) * 100)}%`, 0, 30);
    // ctx.fillText(`Missed:${fruits.missedCount()}`, 165, 30);
    currentTotal = fruits.caughtCount() + fruits.missedCount() + 1;
    // ctx.fillText(`Accuracy:${Math.round((fruits.caughtCount() / currentTotal || 0) * 100)}%`, 330, 30);
    if(endlessMode){
      ctx.fillText("ENDLESS MODE!!!", 165, 95);
    }

    if (fruits.didCatch()){
        // console.log("yes");
        basket.draw(ctx, mouseX, 80);
    } else {
      // console.log("no");
      basket.draw(ctx, mouseX, 48);
    }
    // basket.draw(ctx, mouseX, 48);

    globalID = requestAnimationFrame(update);
    gameOver();

    fruits.create();
    fruits.draw(ctx);
    fruits.update();
    fruits.compost();
    fruits.scoreKeeper(mouseX);
  };

  const gameOver = () => {
    if (fruits.caughtCount() + fruits.missedCount() >= stdGame && !endlessMode) {
      cancelAnimationFrame(globalID);
      document.getElementById('game-over').className = '';
    }
  };
});
