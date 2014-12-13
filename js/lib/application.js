(function() {
  $(function() {
    var drawPig, incidence, maxRotation, pig, random, updatePig;
    updatePig = function(maxRotation) {
      var rotation;
      if (random(0, incidence) === 1) {
        return;
      }
      rotation = random(0, maxRotation * 2) - maxRotation;
      drawPig(rotation);
    };
    drawPig = function(rotateAmount) {
      var rotation;
      rotation = rotateAmount;
      pig.style.webkitTransform = "rotate(" + rotation + "deg)";
    };
    random = function(min, max) {
      return Math.floor((Math.random() * max) + min);
    };
    pig = $("#pig")[0];
    if (pig) {
      maxRotation = 10;
      incidence = 10;
      return setInterval((function(_this) {
        return function() {
          return updatePig(10);
        };
      })(this), 3000);
    }
  });

}).call(this);
