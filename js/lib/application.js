(function() {
  this.app = angular.module("floopSite", ["ngRoute"]);

}).call(this);

(function() {


}).call(this);

(function() {
  this.app.controller("PigController", [
    "$scope", "$interval", function($scope, $interval) {
      var animFrequency, maxRotation;
      $scope.angle = 0;
      animFrequency = 3000;
      maxRotation = 20;
      return (function(maxRotation) {
        return $interval(function() {
          return $scope.angle = _.random(-maxRotation, maxRotation);
        }, animFrequency);
      })(maxRotation);
    }
  ]);

}).call(this);
