document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 600;
  canvasEl.height = 600;
  canvasEl.style.backgroundColor = "grey";

  const ctx = canvasEl.getContext("2d");
  // const game = new Game();
  // new GameView(game, ctx).start();
});
