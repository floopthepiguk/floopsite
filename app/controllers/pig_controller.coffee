@app.controller "PigController", [
  "$scope", "$interval"
  ($scope, $interval) ->
   
    # The angle of the pig
    $scope.angle  = 0
    animPromise   = undefined
  
    #The animation promise (for checking if it's started etc.)
    animFrequency = 3000
    maxRotation   = 20

    #The loop
    ((maxRotation) ->
      animPromise = $interval(->
        console.log "Angling!"
        $scope.angle = _.random(-maxRotation, maxRotation)
      , animFrequency)) maxRotation

    $scope.$on "$destroy", ->
      # Make sure that the interval is destroyed too
      $interval.cancel(animPromise)

    
]

