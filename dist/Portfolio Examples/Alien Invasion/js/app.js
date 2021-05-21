// import {load, _load, get, isReady} from 'resources.js';
// The GOAL!
// Once the player touches the SUN, they make it to the next level.
class Sun {
  // Each Sun, should have an 'x' and a 'y' property
  // to determine it's starting position
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
  }
}

// Enemies our player must avoid
class Enemy {
  constructor(x, y, velX,  style, direction) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.style = style;
    this.size = 30;
    this.direction = direction;
    this.tickCount = 0;
    this.ticksPerFrame = 5;
    this.frameIndex = 0;
    this.numberOfFrames = 3;
  }

  // Each Sun, accept and set an 'x' and a 'y' property
  // to determine it's starting position.
  // Additionally, it should have a 'direction'
  // property with the value of either "ltr" or "rtl"
  // (left to right) or (right to left) so you know
  // 1) which way the enemy is travelling and
  // 2) which image to use (flipped or not flipped)
  // It should also accept a style of 'enemy1',
  // 'enemy2' or 'enemy3', depending on what sort of
  // enemy character you want to use.

  // YOU MAY WANT/NEED other properties in addition
  // to the ones listed.


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
  update(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  // if this.x < 0 , turn to ltr;
  // if this.x > 800, trun to ltr;

    if ((this.x + this.size) >= 800) {
      this.velX = -(this.velX);
    }
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
    this.x += this.velX;
  }
 
};


// Now write your own player class
// This class requires an update() and
// a handleInput() method. It will also need
// an `x` and a `y` starting coordinate.

class Player {
  constructor() {
    this.x = 400;
    this.y = 400;
    this.size = 30;
    this.tickCount = 0;
    this.ticksPerFrame = 5;
    this.frameIndex = 0;
    this.numberOfFrames = 2;
  }

  update() {

  }

  handleInput(key) {
    let offset = 40;
    console.log(key);
    switch(key) {
      case 'left':
        this.x = this.x - offset;
        if(this.x < 0) this.x = 0;
        break;
      case 'up':
        this.y = this.y - offset;
        if(this.y < 0) this.y = 0;
        break;
      case 'right':
        this.x = this.x + offset;
        if(this.x >800) this.x = 800;
        break;
      case 'down':
        this.y = this.y + offset;
        if(this.y > 400) this.y = 400;
        break;
    }

  }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const enemy1 = new Enemy(100, 150, 1, 'enemy1','ltr');
const enemy2 = new Enemy(100, 200, 1, 'enemy2','rtl');
const enemy3 = new Enemy(200, 200, 1, 'enemy3', 'ltr');
const enemy4 = new Enemy(300, 300, 1, 'enemy4','ltr');
let allEnemies = [];
allEnemies.push(enemy4);
allEnemies.push(enemy3);
allEnemies.push(enemy2);
allEnemies.push(enemy1);

// allEnemies.push(enemy1);
// Place the player object in a variable called player
const player = new Player();
// Place the sun object in a variable called sun
const sun = new Sun(400,20);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  const allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };
  if (allowedKeys[e.keyCode]) {
    player.handleInput(allowedKeys[e.keyCode]);
    // e.preventDefault();
  }
});

const level = document.querySelector('#score');
const lives = document.querySelector('#lives');
const levelNumber = level.querySelector('span');
const livesNumber = lives.querySelector('span');


