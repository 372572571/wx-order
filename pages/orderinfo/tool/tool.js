// count Integral
function CountIntegral(array) {
  var count = 0
  for(var k in array){
   
    if (typeof array[k].Total == "number"){
      count += array[k].Total
    }
    if (typeof array[k].Total == "string") {
      count += parseInt(array[k].Total)
    }
  }
  return count
}

module.exports={
  CountIntegral: CountIntegral,
}