var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');
var burger = new createImage('images/burger.png', 40, 40, Math.floor(Math.random() * (1320 - 200)) + 200, Math.random()* 420, -1, 0);
var character = new createImage('images/character.png', 60, 60, 50, 380, 0, 0, 20, 0.4);

var numBurger;
var burgerArray;


//EVENTS ----------------------------------------------------------------------

$(function(){


  // Directional Control SPACE KEY
  $(document).keydown(function(key) {
    if(key.keyCode === 32) {
      character.vy = -5;
    }
  });
});


// MAIN LOOP ----------------------------------------------------------------

mainLoop();
function mainLoop() {

  //burger movement
  numBurger === 20;
  burgerArray = new Array();

  // for(var i = 0; i < numBurger; i++) {
  //   var image = new Image;
  //   var imagesrc = 'images/burger.png';
  //   var width = 40;
  //   var height = 40;
  //   var x =  Math.floor(Math.random() * (1320 - 200)) + 200;
  //   var y = Math.random()* 420;
  //   var vx = -1;
  //   var vy = 0;
  //
  //   burgerArray.push(new burger(image,imagesrc, x, y, width, height, vx, vy));
  // }


 //Burger movement
  burger.x += burger.vx;
  character.y += character.vy;

  //WEIGHT and GRAVITY CHARACTER
  if(character.vy < character.gravity) character.vy += character.weight;

  //CANVAS BOUNDARIES
  //TOP BOUNDARY
  if (character.y <= 0) {
    character.vy = 1;
  }
//BOTTOM BOUNDARY
  if (character.y >= canvas.height - (character.height+40)) {
    character.vy = 0;
  }

//CANVAS
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 1320;
  canvas.height = 520;
  canvas.style = 'border: 3px solid black; text-align: center; margin-left:50px; background-image: url("images/back.png")' ;

 // NON-STATIONARY DRAWINGS
  context.drawImage(character.image, character.x, character.y, character.width, character.height);
  context.drawImage(burger.image, burger.x, burger.y, burger.width, burger.height);

// Loop Time
  setTimeout(mainLoop, 1000/60);
}

// OBJECTS ------------------------------------------------------------------
function createImage(img, w, h, x, y, vx, vy, g, wt) {
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
