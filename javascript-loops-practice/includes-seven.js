/* exported includesSeven */
function includesSeven(array){
  for(var i = 0; i <= array.length; i++){
    var current = array[i];
    if(current === 7){
      return true;
    }
  }
return false;
}
