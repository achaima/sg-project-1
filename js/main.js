/* global Burger, Character */

//EVENTS ----------------------------------------------------------------------

$(function(){
  var canvas = document.getElementById('canvas1');
  var context = canvas.getContext('2d');
  var numberOfBurgers = 6;
  var burgers = [];
  var character = new Character(context, canvas);

  for (var i = 1; i <= numberOfBurgers; i++) {
    burgers.push(new Burger(context, canvas));
  }

  // Directional Control SPACE KEY
  $(document).keydown(function(key) {
    if(key.keyCode === 32) {
      character.vy = -5;
    }
  });

  // MAIN LOOP ----------------------------------------------------------------

  function mainLoop() {

  //CANVAS
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 1320;
    canvas.height = 520;
    canvas.style = 'border: 3px solid black; text-align: center; margin-left:50px; background-image: url("images/back.png")' ;


    //STEP 4
    // for (var j = 0; j < burgsArray.length; j++){
    //   tmpburgers = burgsArray[j];
    //   context.drawImage(burgImage, tmpburgers.x, tmpburgers.y, tmpburgers.w, tmpburgers.h);
    // }

   // NON-STATIONARY DRAWINGS
    // context.drawImage(character.image, character.x, character.y, character.width, character.height);
    // Character movement
    character.move();
    character.sprite.draw();

    //Burger movement
    for (var i = 0 ; i < burgers.length ; i++) {
      burgers[i].sprite.moveAndDraw();
    }

  // Loop Time
    setTimeout(mainLoop, 1000/60);
  }

  mainLoop();
});
