# CatchTheFruit

## Background

Catch the Fruits is a fun game that drops fruit from the top of your screen to the bottom of your screen. When the game starts, fruits will immediately start dropping. The basket will start at the center of the screen. You gain points by catching the fruits in your basket. A single user is able to move their basket side to side using the arrow keys or "W,A,S,D" keys. When the game is in multi-player mode (bonus feature), two players can battle it out using the arrow keys and "W,A,S,D" keys.

## Functionality & MVP
With Catch the Fruit, players will be able to:

- [ ] Start, pause, and reset the game
- [ ] Toggle on/off the music
- [ ] Catch fruits in their basket
- [ ] See their current score vs highest score within a session

This project will also include:
- [ ] An About modal that will describe the rules/ how to play the game
- [ ] The About modal will also include links to the Github and my LinkedIn
- [ ] A production README

## Wireframes
This app will consist of a single screen with a game board, highest score display, and an About modal.
The game board will display the start button and will tell the user to click the start button.
The About modal will include instructions for the game as well as links to the GitHub and my LinkedIn.
On the same section as the About modal will be a volume logo meant to toggle on or off the music.

![image of wireframe] (https://github.com/skdkim/catchthefruits/blob/master/design/catchthefruitwireframe.png)

## Architecture and Technologies
This project will be implemented with the following technologies:
+ Vanilla JavaScript for game logic
+ HTML5 and CSS for rendering game content
+ Canvas to provide '2D' game graphics
+ HTML audio for game music
+ FullScreen API to allow users to fully immerse themselves into the game

## Implementation Timeline
**Day 1:** Learn Canvas and see what other technologies I need to make this project a reality.

Goals for the day:
+ Create a project repo
+ Render background using canvas
+ Define and style Fruit Class, User Class
+ Connect everything to GitHub pages

**Day 2:** Create/Implement the game logic

Goals for the day:
+ Create About's modal with links to github/linkedin
+ Define sound class using HTML audio
+ Render music and options to game screen
+ Create backend game logic
+ Allow the user to interact with the game

**Day 3:** Style game with CSS and images

Goals for the day:
+ Find appropriate images for game
+ Style canvas with CSS
+ Allow users to see their latest highest score

**Day 4:** Fix bugs and implement bonus features

Goals for the day:
+ Touch up on css styling if necessary
+ Fix any bugs if present
+ Implement bonus features

## Bonus features
These are features that I would like to implement in order to make the gaming experience for the user more enjoyable
- [ ] Allow the user to choose their fruit
- [ ] Implement super fruits/bad fruits for powerups/powerdowns
- [ ] Multiple players
