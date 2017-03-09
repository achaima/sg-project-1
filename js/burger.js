/* global Sprite */

function Burger(context) {
  this.context = context;
  this.init();
}

// Initialise the burger.
// Set its initial x- and y- values randomly.
Burger.prototype.init = function () {
  var x = Math.floor(Math.random() * (4000 - 200)) + 200;
  var y = Math.random() * 320;
  this.sprite = new Sprite(this.context, 'images/burger.png', 40, 40, x, y, -1, 0);
};
