
#  
# updatePig
#
# Calculates the new position of the pig
#
updatePig = (maxRotation) ->
  return  if random(0, incidence) is 1
  rotation = random(0, maxRotation * 2) - maxRotation
  drawPig rotation
  return

# drawPig
#
# Updates the pig's styles
#
drawPig = (rotateAmount) ->
  rotation = rotateAmount
  pig.style.webkitTransform = "rotate(" + rotation + "deg)"
  return

#
# Convinience method, returns random positive number between min and max
# 
random = (min, max) ->
  Math.floor (Math.random() * max) + min


pig = $("#pig")[0]
maxRotation = 10
incidence = 10
setInterval =>
  updatePig(10)
, 3000
