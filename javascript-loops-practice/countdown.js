/* exported countdown */
function countdown(number){
  var newArray = [];
  for(var i = number; i >= 0; i--){
    newArray.push(number);
    number--;
  }
  return newArray;
}
