var library = [
  {
    'isbn': '01-234-567',
    'title': 'The Godfather',
    'author': 'Mario Pulso'
  },
  {
    'isbn': '89-1011-1213',
    'title': 'Mamba Mentality',
    'author': 'Kobe Bryant'
  },
  {
    'isbn': '1415-1617-1819',
    'title': 'I Heard You Paint Houses',
    'author': 'Charles Brandt'
  }
]
console.log('The array of books is: ', library);
console.log('The typeof the array of books is: ', typeof library);

var jsonString = JSON.stringify(library);
console.log('The JSON string of the books array is: ', jsonString);
console.log('The typeof the JSON string is: ', typeof jsonString);

var newString = '{"Student Id": 185761, "Student Name": "Udaibir Virk"}';


console.log('The value of the JSON string is: ', newString);
console.log('The typeof the JSON string is: ', typeof newString);

var parsed = JSON.parse(newString);
console.log('The value of the javascript object from JSON is: ', parsed);
console.log('The typeof is: ', typeof parsed);
