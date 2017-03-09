/* global Sprite */

//COLLISION burger
  function myCollisions(first , second) {
    first = first.sprite;
    second = second.sprite;
    if (first.x + first.width >= second.x &&  first.x <= (second.x + second.width)
     && first.y  + first.height >= second.y &&  first.y <= (second.y + second.height)) {
      second.y = -420;
      score ++;
      if(score === 20) {
        alert('YOU WIN, CONGRATULATIONS!');
        // document.location.reload();
      }
    }
  }

//COLLISION cabbage
  function cabbageCollisions(one, two) {
    one = one.sprite;
    two = two.sprite;
    if (one.x + one.width >= two.x &&  one.x <= (two.x + two.width)
     && one.y  + one.height >= two.y &&  one.y <= (two.y + two.height)) {
      two.y = -420;
      score --;
    }
  }
