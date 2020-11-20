/* exported compact */
function compact(array){
var newArray = [];
for(var i = 0; i < array.length; i++){
  var current = array[i];
  if(!!current){
    newArray.push(current);
  }
}
return newArray;
}
