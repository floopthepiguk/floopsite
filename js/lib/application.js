(function() {
  this.app = angular.module("floopSite", ["ngRoute"]);

}).call(this);

(function() {


}).call(this);

(function() {
  this.app.controller("PigController", [
    "$scope", function($scope) {
      var drawPig, maxRotation, pig, updatePig;
      updatePig = function(maxRotation) {
        var rotation;
        rotation = _.random(0, maxRotation * 2) - maxRotation;
        return drawPig(rotation);
      };
      drawPig = function(rotateAmount) {
        var rotation;
        rotation = rotateAmount;
        return pig.style.webkitTransform = "rotate(" + rotation + "deg)";
      };
      pig = $("#pig")[0];
      if (pig) {
        maxRotation = 10;
        return setInterval((function(_this) {
          return function() {
            return updatePig(10);
          };
        })(this), 3000);
      }
    }
  ]);

}).call(this);
