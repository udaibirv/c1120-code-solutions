/* exported sumAll */
function sumAll(numbers){
  var result = 0;
  for(var i = 0; i < numbers.length; i++){
    var current = numbers[i];
    result+=current;
  }
  return result;
}
