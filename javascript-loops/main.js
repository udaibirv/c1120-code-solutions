/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen(){
  var numbers = [];
  var currentNumber = 1;
  while(currentNumber <= 10){
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty(){
  var evenNumbers = [];
  var currentNumber = 2;
  while(currentNumber <= 20){
    evenNumbers.push(currentNumber);
    currentNumber+=2;
  }
  return evenNumbers;
}

function repeatWord(word, times){
  var count = 1;
  var repeated = '';
  while(count < times){
    repeated+=word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string){
  for(var i = 0; i < string.length; i++){
    var current = string[i];
    console.log(current);
  }
}

function doubleAll(numbers){
  var doubled = [];
  for(var i = 0; i < numbers.length; i++){
    var currentElem = numbers[i];
    doubled.push((currentElem * 2));
  }
  return doubled;
}

function getKeys(object){
  var keys = [];
  for(key in object){
    keys.push(key);
  }
  return keys;
}

function getValues(object){
  var values = [];
  for(key in object){
    values.push(object[key]);
  }
  return values;
}
