var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');
var burger = new createImage('images/burger.png', 40, 40, 180, 100);



// GAME LOOP ----------------------------------------------------------------
mainLoop();
function mainLoop() {

  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 1320;
  canvas.height = 350;
  canvas.style = 'border: 3px solid black; text-align: center; margin-left:50px; background-color: #87CEFA' ;

 // Burger
  context.drawImage(burger.image, burger.x, burger.y, burger.width, burger.height);

// Loop Time
  setTimeout(mainLoop, 1000/60);
}

// OBJECTS ------------------------------------------------------------------
function createImage(img, w, h, x, y) {
  this.image = new Image();
  this.image.src = img;
  this.width = w;
  this.height = h;
  this.x = x;
  this.y = y;
}
