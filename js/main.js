/* global Burger, Character*/

//EVENTS ----------------------------------------------------------------------

$(function(){
  var canvas = document.getElementById('canvas1');
  var context = canvas.getContext('2d');
  var character = new Character(context, canvas);
  var numberOfBurgers = 50;
  var burgers = [];
  var score = 0;

  for (var i = 1; i <= numberOfBurgers; i++) {
    burgers.push(new Burger(context, canvas));
  }

  // Directional Control SPACE KEY
  $(document).keydown(function(key) {
    if(key.keyCode === 32) {
      character.sprite.vy = -2;
    }
  });

  // MAIN LOOP ----------------------------------------------------------------

  function mainLoop() {



  //CANVAS
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 1320;
    canvas.height = 520;
    canvas.style = 'border: 3px solid white; text-align: center; margin-left:50px; background-image: url("images/back.png")' ;

//Character
    character.sprite.draw();
    character.move();


  //Burger movement
    for (var i = 0 ; i < burgers.length ; i++) {
      burgers[i].sprite.moveAndDraw();
      if (myCollisions(character, burgers[i])) break;
    }

    drawScore();


  // Loop Time
    setTimeout(mainLoop, 7);
  }

  mainLoop();

//COLLISION
  function myCollisions(first , second) {
    first = first.sprite;
    second = second.sprite;
    if (first.x >= second.x &&  first.x <= (second.x + second.width + 10)
     && first.y >= second.y &&  first.y <= (second.y + second.height + 10)) {
      second.y = -420;
      score ++;
      if(score === 10) {
        alert("YOU WIN, CONGRATULATIONS!");
        document.location.reload();
      }
    }
  }
  function drawScore() {
    // context.getImage = 'images/burger.png';
    context.font = '16px Arial';
    context.fillStyle = '#F0F8FF';
    context.fillText('Score: '+score, 50, 30);
  }

});
