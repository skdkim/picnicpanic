# Picnic Panic

[Picnic Panic live] (https://skdkim.github.io/picnicpanic)

## About the Game
Picnic Panic is a JavaScript game written with Vanilla JS, HTML, and CSS. It utilizes CSS to style the page, the HTML Canvas element to render it's graphics, and Vanilla JS to create the game logic. 
The objective of the game is catch as many falling fruits as you can into the basket. A standard game throws 25 fruits from random positions of the screen ceiling but in endless mode you can go for as long as you want.

## How to Play
You are the basket in Picnic Panic. The basket follows the mouse's movement. Catch the falling fruits with the basket.

At the top of the screen there are three scores, number of caught fruits, number of missed fruits, and an accuracy percentage.
Any given game will end after 25 fruits have fallen, but if you're eager to practice more, there is endless mode. 

You can enter endless mode by pressing "e" while a game is in play.

You can quit anytime by pressing "q."

## Technical Implementations

### Informational Screens
These modal-like screens are not part of canvas but rather part of the HTML. They are positioned in the exact same places with absolute positioning. At first I attempted to hide these views with the CSS attribute, `display: none`. This caused me problems because I also wanted to utilize `display: flex`. My work around for this was to use the attribute `visibility: hidden`. By creating style that only hid visibility in the stylesheet file, I was able to toggle the visibility of all my elements through JavaScript.

### Basket Movement
One of my biggest design decision for this game was how I was going to allow the user to move their basket. I could have let the player move with their keyboard or with their mouse. I decided to implement mouse movement because it provided the most fluid movement for the basket that most accurately represented the speed of motion a human would have when actually catching something.

Here is a code snippet of my mouse movement implementation:
```javascript
  const getMousePos = (e) => {
    let rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left
    };
  };
  
  canvas.addEventListener('mousemove', (e) => {
    mouseX = getMousePos(e).x;
  }, false);
```
I send into the draw function of my basket the canvas context and the mouseX position.
I chose to leave out the y position because the basket would always be stuck to the floor and I had no need for that data in my basket draw function.

### Thump Sound Effect
The only thing that could make catching a fruit more satisfying than seeing the scores increase was hearing a thump. My main issue here was that the thump file I had was 3 seconds long and I was unable to create another thump play without the previous one being finished. At first I tried to find a sound file with a shorter play time but after realizing that it would bar me from implementing faster speeds I decided to tackle this problem a different way.

I solved this problem by cloning the sound and playing the clone.

This bit of code is inside the constructor of my fruit class
```javascript
    this.thumpSound = new Audio('./assets/sounds/thump.mp3');
    this.thumpSound.preload = 'auto';
    this.thumpSound.load();
```

This is where the cloning happens, right before the sound needs to be played.
This code lives inside the function that decides whether the basket caught the fruit or not.
```javascript
    let sound = this.thumpSound.cloneNode();
    sound.play();
```

### Implementing Endless Mode
This last addition to Picnic Panic wasn't technically challenging but was fun to implement. In case any player wants to let go of themselves and get addicted to my game, or do some serious practicing, the endless mode helps them play forever. The stats will forever update for them also, except sooner or later the accuracy stats will not change too much given the nature of percentages.

I simply added an event listener to the window. The ability to press "e" to go into endless mode is explained in the "How to Play" screen. The key event simply changes the variable earlierly set to false to true.
```javascript
  window.addEventListener('keydown', e => {
    if (e.keyCode === 69){
      endlessMode = true;
    }
  });
```

My gameOver function was always listening for the endlessMode. In case you were wondering, stdGame is just a number set to 25, the standard amount of fruits a player gets per game.
```javascript
  const gameOver = () => {
    if (fruits.caughtCount() + fruits.missedCount() >= stdGame && !endlessMode) {
      cancelAnimationFrame(globalID);
      document.getElementById('game-over').className = '';
    }
  };
```
