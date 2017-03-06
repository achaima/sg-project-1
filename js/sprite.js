function Sprite(context, img, w, h, x, y, vx, vy, g, wt) {
  this.context = context;
  this.image = new Image();
  this.image.src = img;
  this.width = w;
  this.height = h;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.gravity = g;
  this.weight = wt;
}

Sprite.prototype.moveAndDraw = function () {
  this.move();
  this.draw();
};

Sprite.prototype.move = function () {
  this.x += this.vx;
};

Sprite.prototype.draw = function () {
  this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
};
