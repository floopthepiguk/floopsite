var pig = document.getElementById("pig");
var screenGutter = 100;
var maxRotation = 25;

setInterval(function(){movePig(screenGutter, maxRotation)}, 1000);

function movePig(screenGutter, maxRotation) {
  if(random(1,2) == 1) {
    return;
  }
  size = screenSize();
  var left  = random(screenGutter, size[0]-screenGutter);
  var top   = random(screenGutter, size[1]-screenGutter);
  drawPig(top, left, random(0, maxRotation), left < (size[0]/2));
}

function drawPig(top, left, rotateAmount, rotateLeft) {
  pig.style.left = left + "px";
  pig.style.top = top + "px";
  var rotation = ((rotateLeft == true) ? -rotateAmount : rotateAmount);
  pig.style.webkitTransform = "rotate(" + rotation + "deg)"
}

function screenSize() {
  return [$(document).width(),$(document).height()];
}

function random(min, max) {
  return Math.floor((Math.random() * max) + min);
}


