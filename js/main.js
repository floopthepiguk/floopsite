var pig = document.getElementById("pig");
var maxRotation = 10;
var incidence = 10;


setInterval(function(){updatePig(maxRotation)}, 3000);


/*
 * 
 * updatePig
 *
 * Calculates the new position of the pig
 *
 */
function updatePig(maxRotation) {
  if(random(0,incidence) == 1) {
    return;
  }
  var rotation = random(0, maxRotation*2) - maxRotation;
  drawPig(rotation);
}


/*
 * drawPig
 *
 * Updates the pig's styles
 *
 */
function drawPig(rotateAmount) {
  var rotation = rotateAmount;
  pig.style.webkitTransform = "rotate(" + rotation + "deg)"
}


/*
 *
 * Convinience method, returns random positive number between min and max
 *
 */
function random(min, max) {
  return Math.floor((Math.random() * max) + min);
}


