/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Udaibir',
  lastName: 'Virk',
  age: 23
}
var fullName = student.firstName + ' ' + student.lastName;
console.log('The value of fullName is: ' + fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('The value of student.livesInIrvine is: ' , student.livesInIrvine);
console.log('The value of student.previousOccupation is: ' , student.previousOccupation);
console.log('The value of student: ' , student);

var vehicle = {
  make: 'Royal Enfield',
  model: 'Bullet 500',
  year: 2005
}
vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;

console.log('The value of vehicle["color"] is: ' , vehicle['color']);
console.log('The value of vehicle["isConvertible"] is: ', vehicle['isConvertible']);
console.log('The value of vehicle: ', vehicle)

var pet = {
  name: 'Roxy',
  type: 'German Shepard'
}
delete pet.name;
delete pet.type;

console.log('The value of pet: ' , pet);
