/* exported getValue */
function getValue(object, key){
for(var property in object){
  return object[property];
}
}
