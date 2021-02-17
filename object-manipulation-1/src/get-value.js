/* exported getValue */
function getValue(object, key){
  for(var keys in object){
    var values = object[key];
    if(values === key){
      return values;
    }
  }
  return values
}
