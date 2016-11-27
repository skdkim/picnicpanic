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
    let yPosition = 0;

    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  };

  let canvasPos = getPosition(canvas);
  let mouseX = 0;
  let mouseY = 0;

  const setMousePosition = (e) => {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
  };

  canvas.addEventListener("mousemove", setMousePosition, false);


  const newGame = () => {
    // debugger
    basket = new Basket(mouseX);

    fruits = new Fruits();
    // debugger
  };

  const update = () => {
    // basket.draw(ctx);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(mouseX, 600 - 48, 100, 100);
    requestAnimationFrame(update);
  };

  const animate = () => {
    update();

  };

  newGame();
  // animate();
  update();
});
