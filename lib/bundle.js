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


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	class Fruit {
	
	}
	
	module.exports = Fruit;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map