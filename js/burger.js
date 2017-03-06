/* global Sprite */

function Burger(context) {
  this.context = context;
  this.init();
}

// Initialise the burger.
// Set its initial x- and y- values randomly.
Burger.prototype.init = function () {
  var x = Math.floor(Math.random() * (1320 - 200)) + 200;
  var y = Math.random() * 420;

  this.sprite = new Sprite(this.context, 'images/burger.png', 40, 40, x, y, -1, 0);
};
