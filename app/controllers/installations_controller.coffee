@app.controller "InstallationsController", [
  "$scope", "$http"
  ($scope, $http) ->

    $http.get("/app/api/installations.json")
      .success (data, status, headers, config) ->
        $scope.installations = data
   
]
