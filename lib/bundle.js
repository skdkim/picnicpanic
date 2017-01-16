/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Basket = __webpack_require__(1);
	const Fruits = __webpack_require__(2);
	document.addEventListener("DOMContentLoaded", () => {
	  const canvas = document.getElementById("canvas");
	  const ctx = canvas.getContext("2d");
	
	  canvas.width = canvas.scrollWidth;
	  canvas.height = canvas.scrollHeight;
	
	  let basket;
	  let preBasket;
	  let fruits;
	  let mouseX;
	  let globalID;
	  let currentTotal;
	  let topBg;
	  let preLoop;
	  let paused = false;
	  let stdGame = 12;
	  let endlessMode = false;
	  let basketHeight = 48;
	  let currentAccuracy;
	  let highScore = 0;
	
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
	    cancelAnimationFrame(preLoop);
	
	    newGame();
	  });
	
	  document.getElementById('re-start').addEventListener(('click'), () => {
	    document.getElementById('game-over').className = 'v-h';
	    endlessMode = false;
	    newGame();
	  });
	
	  document.getElementById('high-score').innerText = `Highest Accuracy: ${highScore}%`;
	
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
	
	  const preGame = () => {
	    preBasket = new Basket(mouseX, basketHeight);
	    preUpdate();
	  };
	
	  const preUpdate = () => {
	    ctx.clearRect(0,0,canvas.width, canvas.height);
	
	    preBasket.draw(ctx, mouseX, basketHeight);
	    preLoop = requestAnimationFrame(preUpdate);
	  };
	
	  // preGame();
	
	  const update = () => {
	    ctx.clearRect(0,0,canvas.width, canvas.height);
	    ctx.fillStyle = 'rgba(76, 128, 66, 0.5)';
	    ctx.fillRect(0,0,600,45);
	
	    ctx.font = '30px monospace';
	    ctx.fillStyle = 'black';
	    currentAccuracy = Math.round((fruits.caughtCount() / (fruits.missedCount() + fruits.caughtCount())) * 100);
	    ctx.fillText(`Caught:${fruits.caughtCount()} Missed:${fruits.missedCount()} Accuracy:${currentAccuracy || 0}%`, 0, 30);
	    // ctx.fillText(`Missed:${fruits.missedCount()}`, 165, 30);
	    currentTotal = fruits.caughtCount() + fruits.missedCount() + 1;
	    // ctx.fillText(`Accuracy:${Math.round((fruits.caughtCount() / currentTotal || 0) * 100)}%`, 330, 30);
	    if(endlessMode){
	      ctx.fillText("ENDLESS MODE!!!", 165, 95);
	    }
	
	    if (fruits.didCatch()){
	      basketHeight = 80;
	    } else {
	      basketHeight = 48;
	    }
	    basket.draw(ctx, mouseX, basketHeight);
	
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
	      if (highScore < currentAccuracy){
	        highScore = currentAccuracy;
	      }
	      document.getElementById('high-score').innerText = `Highest Accuracy: ${highScore}%`;
	      // preGame();
	      document.getElementById('game-over').className = '';
	    }
	  };
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	class Fruit {
	  constructor (){
	    this.apple = new Image();
	    // this.orange = new Image();
	    // this.watermelon = new Image();
	    this.apple.src = './assets/images/apple.png';
	    // this.orange.src = './assets/images/orange.png';
	    // this.watermelon.src = './assets/images/watermelon.png';
	    this.x = 0;
	    this.y = -35;
	    this.width = 35;
	    this.height = 35;
	
	    this.speedX = 0;
	    this.speedY = 0;
	    this.gravity = 13;
	    this.gravitySpeed = 0;
	
	    this.fruits = {};
	    this.count = 0;
	
	    this.caught = 0;
	    this.missed = 0;
	
	    this.justCaught = false;
	
	    this.thumpSound = new Audio('./assets/sounds/thump.mp3');
	  }
	
	  create(){
	    while (Object.keys(this.fruits).length < 1){
	      this.fruits[this.count] = {
	        x: Math.floor(Math.random() * (565)),
	        y: this.y,
	        width: this.width,
	        height: this.height
	      };
	      this.count++;
	    }
	  }
	
	  didCatch(){
	    return this.justCaught;
	  }
	
	  caughtCount(){
	    return this.caught;
	  }
	
	  missedCount(){
	    // return Math.floor(this.missed / 2);
	    return this.missed;
	  }
	
	  basketCaught(fruit, mouseX){
	    if (fruit.x > mouseX - 48 && fruit.x < mouseX + 48){
	      let sound = this.thumpSound.cloneNode();
	      sound.play();
	      this.justCaught = true;
	      return this.justCaught;
	    } else {
	      this.justCaught = false;
	    }
	    return this.justCaught;
	  }
	
	  scoreKeeper(mouseX){
	    for (let fruit in this.fruits){
	      if (this.fruits[fruit].y >= 200){
	        this.justCaught = false;
	      }
	
	      if (this.fruits[fruit].y >= 550){
	        if (this.basketCaught(this.fruits[fruit], mouseX)) {
	          this.caught++;
	          delete this.fruits[fruit];
	        }
	      }
	    }
	  }
	
	  compost(){
	    for (let fruit in this.fruits){
	      if (this.fruits[fruit].y > 600) {
	        this.missed++;
	        delete this.fruits[fruit];
	      }
	    }
	  }
	
	  update(){
	    for (let fruit in this.fruits){
	      this.fruits[fruit].y += this.speedY + this.gravity;
	    }
	  }
	
	  draw(ctx) {
	    for (let fruit in this.fruits){
	      ctx.drawImage(this.apple, this.fruits[fruit].x, this.fruits[fruit].y, this.fruits[fruit].width, this.fruits[fruit].height);
	    }
	  }
	}
	
	module.exports = Fruit;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map