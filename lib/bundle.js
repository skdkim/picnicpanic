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
	
	  const newGame = () => {
	    // debugger
	    basket = new Basket(mouseX);
	    fruits = new Fruits();
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
	
	  newGame();
	  animate();
	  // update();
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Basket {
	  constructor(x){
	    // this.width = width;
	    // this.height = height;
	    // this.color = color;
	
	    this.img = new Image();
	    this.img.src = './assets/images/basket.png';
	    // this.drawn = false;
	    this.x = x;
	    this.y = 600 - 48;
	    this.width = 48 * 2;
	    this.height = 48;
	  }
	
	  create(){
	  }
	
	  draw(ctx, x){
	    // debugger
	    // ctx.clearRect(0,0,clrWidth, clrHeight);
	    // ctx.fillStyle = "red";
	    // ctx.fillRect(x - (this.destWidth / 2), this.y, this.destWidth, this.destHeight);
	    ctx.drawImage(this.img, x - (this.width / 2), this.y, this.width, this.height);
	    // this.drawn = true;
	    // debugger
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
	    // this.x = Random number
	    this.x = -35;
	    this.y = 0;
	    this.width = 35;
	    this.height = 35;
	
	    this.speedX = 0;
	    this.speedY = 0;
	    this.gravity = 0.05;
	    this.gravitySpeed = 0;
	
	    this.fruits = {};
	    this.count = 0;
	  }
	
	  create(){
	    while (Object.keys(this.fruits).length < 5){
	      this.fruits[this.count] = {
	        x: Math.floor(Math.random() * (600)),
	        y: this.y,
	        width: this.width,
	        height: this.height
	      };
	      this.count++;
	    }
	  }
	
	  compost(){
	    for (let fruit in this.fruits){
	
	      if (this.fruits[fruit].y > 600) {
	        delete this.fruits[fruit];
	      }
	    }
	    // this.fruits = this.fruits.filter( fruit => {
	    //   fruit.y > 300;
	    // });
	  }
	
	  update(){
	    for (let fruit in this.fruits){
	      this.fruits[fruit].y += this.speedY + this.gravity;
	    }
	    // this.gravitySpeed += this.gravity;
	    // fruit.x += this.speedX;
	    // this.y += this.speedY + this.gravitySpeed;
	    // this.hitBottom();
	  }
	
	  draw(ctx) {
	    // this.create();
	    // ctx.clearRect(0,0,clrWidth, clrHeight);
	    for (let fruit in this.fruits){
	      ctx.drawImage(this.apple, this.fruits[fruit].x, this.fruits[fruit].y, this.fruits[fruit].width, this.fruits[fruit].height);
	    }
	    // this.fruits.forEach( fruit => {
	      // this.update(fruit);
	    // });
	  }
	
	}
	
	module.exports = Fruit;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map