@app.controller "PigController", [
  "$scope"
  ($scope) ->

    #  
    # updatePig
    #
    # Calculates the new position of the pig
    #
    updatePig = (maxRotation) ->
      rotation = _.random(0, maxRotation * 2) - maxRotation
      drawPig rotation

    # 
    # drawPig
    #
    # Updates the pig's styles
    #
    drawPig = (rotateAmount) ->
      rotation = rotateAmount
      pig.style.webkitTransform = "rotate(" + rotation + "deg)"


    pig = $("#pig")[0]

    if pig
      maxRotation = 10
      setInterval =>
        updatePig(10)
      , 3000
]

