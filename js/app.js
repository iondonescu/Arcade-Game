
// Enemies our player must avoid
class Enemy {
  constructor(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    //set enemy speed
    this.speed = 100 + Math.random()*150;
    this.attempt = 0;
  };
  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    //dt is defined in engine.js
    this.x += this.speed * dt;
    // return enemy to left
    if (this.x > 600) {
      this.x = -100;
    };
    // colliding section
    if (Math.abs(this.x - player.x) < 55 && Math.abs(this.y - player.y) < 35) {
      player.resetPlayer();// TO DO : Take one heart
    };
  };
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
  constructor(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
  }
  // ///adding two prototype
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
  update() {

  };
  handleInput(key) {
    if (key === 'left' && this.x > 0) { this.x += -100};
    if (key === 'right' && this.x < 399) {this.x += 100};
    if (key === 'up' && this.y > -25 ) {this.y += -75};
    if (key === 'down' && this.y < 350) {this.y += 75};
    if (this.y === -25) {
      setTimeout(function() {
        //alert (`GREAT!`); TO DO : Pop up window with "style GREAT"
        player.resetPlayer();
    },500); // TO DO :insert a function that increment the successfully attempts number

    };
  };
  // bring the player to the start position
    resetPlayer() {
        this.x = 200;
        this.y = 350;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemy1 = new Enemy(-100,63);
const enemy2 = new Enemy(-200,146);
const enemy3 = new Enemy(-150,229);
const allEnemies = [enemy1, enemy2, enemy3];
const player = new Player(200,350);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
