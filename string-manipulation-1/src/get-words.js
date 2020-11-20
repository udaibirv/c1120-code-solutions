/* exported getWords */
function getWords(string){
  var empty = [];
  var newWord = [];
  if(string === ''){
    return empty;
  }else{
    var newString = string.split(' ');
    newWord.push(newString);
  }
  return newString;

}
