/* exported findIndex */
function findIndex(array, value){
  for(var i = 0; i < array.length; i++){
    var current = array[i];
    if(current === value){
      return i;
    }
  }
  return -1;
}
