const Basket = require('./basket');
const Fruits = require('./fruit');
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  let basket;
  let fruits;


  const getPosition = (el) => {
    let xPosition = 0;

    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      el = el.offsetParent;
    }
    return {
      x: xPosition,
    };
  };

  let canvasPos = getPosition(canvas);
  let mouseX = 0;

  const setMousePosition = (e) => {
    mouseX = e.clientX - canvasPos.x;
  };

  canvas.addEventListener("mousemove", setMousePosition, false);

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
    console.log("clicked!");
    document.getElementById('start-screen').className = 'v-h';
    newGame();
  });

  const newGame = () => {
    // debugger
    basket = new Basket(mouseX);
    fruits = new Fruits();
    animate();
    // debugger
  };

  const update = () => {
    // debugger
    ctx.clearRect(0,0,canvas.width, canvas.height);
    basket.draw(ctx, mouseX);
    fruits.create();
    fruits.draw(ctx);
    fruits.update();
    fruits.compost();
    //
    // ctx.fillStyle = "red";
    // ctx.fillRect(mouseX - 50, 600 - 48, 100, 100);
    requestAnimationFrame(update);
  };

  const animate = () => {
    update();
    requestAnimationFrame(animate);
  };

  // newGame();
  // animate();
});
