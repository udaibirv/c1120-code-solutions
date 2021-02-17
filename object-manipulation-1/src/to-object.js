/* exported toObject */
function toObject(keyValuePair){
  var newObject = {};
  for(var i = 0; i <= keyValuePair.length; i++){
    if(typeof keyValuePair[0] === 'string'){
      var key = keyValuePair[0]
    }
    if(keyValuePair[1]){
      var value = keyValuePair[1];
    }


}
newObject[key] = value;
return newObject;
}
