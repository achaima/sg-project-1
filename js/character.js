/* global Sprite*/

function Character(context) {
  this.context = context;
  this.init();
}

// Initialise the Character.
Character.prototype.init = function () {
  this.sprite = new Sprite(this.context, 'images/pacman.png', 60, 60, 50, 350, 0, -2, 2, 0.1);
};

  //CHARACTERS MOVEMENT
Character.prototype.move = function () {
  this.sprite.y += this.sprite.vy;

  // //WEIGHT and GRAVITY OF CHARACTER
  if(this.sprite.vy < this.sprite.gravity) {
    this.sprite.vy += this.sprite.weight;
  }

  //CANVAS BOUNDARIES
  //TOP BOUNDARY
  if (this.sprite.y <= 0) {
    this.sprite.vy = 1;
  }

  //BOTTOM BOUNDARY
  if (this.sprite.y >= this.context.canvas.height - (this.sprite.height+40)) {
    this.sprite.vy = 0;
  }


};
