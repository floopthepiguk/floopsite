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
      }).when("/faq", {
        templateUrl: "app/views/faq.html"
      }).when("/installations", {
        templateUrl: "app/views/installations.html"
      }).when("/installations/:slug", {
        templateUrl: "app/views/installation.html"
      }).otherwise({
        redirectTo: "/"
      });
    }
  ]);

}).call(this);

(function() {
  this.app.controller("InstallationController", [
    "$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {
      return $http.get("/app/api/installations.json").success(function(data, status, headers, config) {
        return $scope.installation = _.find(data, function(i) {
          return i.slug === $routeParams.slug;
        });
      });
    }
  ]);

}).call(this);

(function() {
  this.app.controller("InstallationsController", [
    "$scope", "$http", function($scope, $http) {
      return $http.get("/app/api/installations.json").success(function(data, status, headers, config) {
        return $scope.installations = data;
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
          return $scope.angle = _.random(-maxRotation, maxRotation);
        }, animFrequency);
      })(maxRotation);
      return $scope.$on("$destroy", function() {
        return $interval.cancel(animPromise);
      });
    }
  ]);

}).call(this);
