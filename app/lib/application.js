(function() {
  this.app = angular.module("floopSite", ["ngRoute"]);

}).call(this);

(function() {
  this.app.config([
    "$routeProvider", function($routeProvider) {
      return $routeProvider.when("/", {
        templateUrl: "app/views/home.html"
      }).when("/about", {
        templateUrl: "app/views/about.html"
      }).when("/installations", {
        templateUrl: "app/views/installations.html"
      }).when("/faq", {
        templateUrl: "app/views/faq.html"
      }).otherwise({
        redirectTo: "/"
      });
    }
  ]);

}).call(this);

(function() {
  this.app.controller("PigController", [
    "$scope", "$interval", function($scope, $interval) {
      var animFrequency, animPromise, maxRotation;
      $scope.angle = 0;
      animPromise = void 0;
      animFrequency = 3000;
      maxRotation = 20;
      (function(maxRotation) {
        return animPromise = $interval(function() {
          console.log("Angling!");
          return $scope.angle = _.random(-maxRotation, maxRotation);
        }, animFrequency);
      })(maxRotation);
      return $scope.$on("$destroy", function() {
        return $interval.cancel(animPromise);
      });
    }
  ]);

}).call(this);
