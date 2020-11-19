/* exported oddOrEven */
function oddOrEven(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    var current = array[i];
    if(current % 2 === 0){
      newArray.push('even');
    }else{
      newArray.push('odd');
    }
  }
  return newArray;
}
