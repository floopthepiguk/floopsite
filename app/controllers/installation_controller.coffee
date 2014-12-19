@app.controller "InstallationController", [
  "$scope", "$http", "$routeParams"
  ($scope, $http, $routeParams) ->
    $http.get("/app/api/installations.json")
      .success (data, status, headers, config) ->
        $scope.installation = _.find data, (i) ->
          return i.slug == $routeParams.slug
]
