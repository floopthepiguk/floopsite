@app.controller "PigController", [
  "$scope", "$interval"
  ($scope, $interval) ->
   
    # The angle of the pig
    $scope.angle  = 0


    # Animation settings
    animPromise   = undefined
    animFrequency = 3000
    maxRotation   = 20


    #The loop
    ((maxRotation) ->
      animPromise = $interval(->
        $scope.angle = _.random(-maxRotation, maxRotation)
      , animFrequency)) maxRotation


    # Make sure that the interval is destroyed too
    $scope.$on "$destroy", ->
      $interval.cancel(animPromise)
]
