/* global Sprite */

function Cabbage(context) {
  this.context = context;
  this.init();
}

// Initialise the cabbage
// Set its initial x- and y- values randomly.
Cabbage.prototype.init = function () {
  var x = Math.floor(Math.random() * (4000 - 200)) + 200;
  var y = Math.random() * 200;
  this.sprite = new Sprite(this.context, 'images/cabbage.png', 40, 40, x, y, -1, 0);
};
