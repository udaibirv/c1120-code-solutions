/* exported filterOutNulls */
function filterOutNulls(values){
  var newArray = [];
  for(var i = 0; i < values.length; i++){
    var current = values[i];
    if(current !== null){
      newArray.push(current);
    }
  }
  return newArray;
}
