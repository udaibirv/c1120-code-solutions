function convertMinutesToSeconds(minutes){
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds Result: ', convertMinutesToSecondsResult);


function greetName(name){
  return "Hey, " + name;
}

var greetNameResult = greetName('Beavis');
console.log('greetName Result: ', greetNameResult);

function getArea(width, height){
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log('getArea Result: ', getAreaResult);


function getFirstName(person){
  return person.firstName;
}
var getFirstNameResult = getFirstName({firstName: 'Lelouche', lastName: 'Lamperouge'});
console.log('getFirstName Result: ', getFirstNameResult);

function getlastElement(array){
  var last = array[array.length -1];
  return last;
}
var getLastElementResult = getlastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement Result: ', getLastElementResult);
