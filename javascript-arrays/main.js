var colors =
  ['red', 'white', 'blue'];
console.log('The value of colors[0] is: ', colors[0]);
console.log('The value of colors[1] is: ', colors[1]);
console.log('The value of colors[2] is: ' , colors[2]);

console.log('America is ' + colors[0] + ', ' + colors[1] + ', ' + 'and' + ' ' + colors[2] + '.');
colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + 'and' + ' ' + colors[2] + '.');
console.log('The value of colors array is: ' , colors);

var students =
  ['Leonardo', 'Donatello', 'Raphael', 'Michelangelo']

var numberOfStudents = students.length;
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('There are ' + students.length + ' students in the class.')
console.log('The last student in the array is ' + lastStudent);
console.log('The value of students array is: ', students);
