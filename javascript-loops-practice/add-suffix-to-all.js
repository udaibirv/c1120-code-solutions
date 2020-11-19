/* exported addSuffixToAll */
function addSuffixToAll(words, suffix){
  var newArray = [];
  for(var i = 0; i < words.length; i++){
    var current = words[i];
    var newWord = current+suffix;
    newArray.push(newWord);
  }
  return newArray
}
