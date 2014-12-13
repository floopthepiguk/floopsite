@app.controller "PigController", [
  "$scope", "$interval"
  ($scope, $interval) ->
   
    # The angle of the pig
    $scope.angle  = 0
  
    #The animation promise (for checking if it's started etc.)
    animFrequency = 3000
    maxRotation   = 20

    #The loop
    ((maxRotation) ->
      $interval(->
        $scope.angle = _.random(-maxRotation, maxRotation)
      , animFrequency)) maxRotation
]

