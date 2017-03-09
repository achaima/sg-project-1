/* global Burger, Character, Cabbage*/

//Instructions button
  $(document).ready(function(){
    $('.gameOver').hide();
    $('#win').hide();
    $('#lose').hide();
    $('#myBtn').click(function(){
      $('#myModal').modal('toggle');

    });

  });


//EVENTS ----------------------------------------------------------------------
//Start screen
  $('#StartButton').click(function () {
    $('#SplashScreen').hide();
    $('#canvas1').show();

//Global Variables
    var canvas = document.getElementById('canvas1');
    var context = canvas.getContext('2d');
    var character = new Character(context, canvas);
    var numberOfBurgers = 50;
    var burgers = [];
    var numberOfCabbages = 15;
    var cabbages= [];
    var score = 0;


  //BURGER LOOP TO ADD BURGERS TO EMPTY ARRAY
    for (var i = 1; i <= numberOfBurgers; i++) {
      burgers.push(new Burger(context, canvas));
    }

  //CABBAGE LOOP TO ADD BURGERS TO EMPTY ARRAY
    for (var c = 1; c <= numberOfCabbages; c++) {
      cabbages.push(new Cabbage(context, canvas));
    }

    // SPACE KEY MOVEMENT
    $(document).keydown(function(key) {
      if(key.keyCode === 32) {
        character.sprite.vy = -2;
      }
    });


  // MAIN LOOP ----------------------------------------------------------------

    function mainLoop() {


  //CANVAS CREATION
      context.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = 1320;
      canvas.height = 520;
      canvas.style = 'border: 3px solid black; text-align: center; margin-left:50px; background-image: url("images/back.png")' ;


//Character MOVEMENT
      character.sprite.draw();
      character.move();


  //Burger movement
      for (var i = 0 ; i < burgers.length ; i++) {
        burgers[i].sprite.moveAndDraw();
        if (myCollisions(character, burgers[i])) break;
      }

 //Cabbage movement
      for (var a = 0 ; a < cabbages.length ; a++) {
        cabbages[a].sprite.moveAndDraw();
        if (cabbageCollisions(character, cabbages[a])) break;
      }

//Score
      drawScore();


  // Loop Time
      setTimeout(mainLoop, 7);
    }

    setTimeout(function () {
      if(score < 5) {
        $('.gameOver').show();
        $('#lose').show();
        $('#playAgainLose').click(function(){
          document.location.reload();
        });
      }
    }, 20000);


    mainLoop();


//COLLISION burger
    function myCollisions(first , second) {
      first = first.sprite;
      second = second.sprite;
      if (first.x + first.width >= second.x &&  first.x <= (second.x + second.width)
       && first.y  + first.height >= second.y &&  first.y <= (second.y + second.height)) {
        second.y = -420;
        score ++;
        if(score === 5) {
          $('#win').show();
          $('#playAgainWin').click(function(){
            document.location.reload();
          });

        }
      }
    }

  //COLLISION cabbage
    function cabbageCollisions(first, second) {
      first = first.sprite;
      second = second.sprite;
      if (first.x + first.width >= second.x &&  first.x <= (second.x + second.width)
       && first.y  + first.height >= second.y &&  first.y <= (second.y + second.height)) {
        second.y = -420;
        score --;
      }
    }

  //Score
    function drawScore() {
      context.font = '18px Arial';
      context.fillStyle = '#F0F8FF';
      context.fillText('Score: '+score+'/25', 50, 30);
    }

  });
