(function() {
  this.app = angular.module("floopSite", ["ngRoute"]);

}).call(this);

(function() {
  this.app.config([
    "$routeProvider", function($routeProvider) {
      return $routeProvider.when("/about", {
        templateUrl: "app/views/about.html"
      }).when("/installations", {
        templateUrl: "app/views/installation-list.html"
      }).when("/faq", {
        templateUrl: "app/views/faq.html"
      }).otherwise({
        redirectTo: "/about"
      });
    }
  ]);

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
