/* exported filterOutStrings */
function filterOutStrings(values){
  var newArray = [];
  for(var i = 0; i < values.length; i++){
    var current = values[i];
    if(typeof current !== 'string'){
      newArray.push(current);
    }
  }
  return newArray;
}
