var frobe = 8;
var mamba = 24;
var toronto = 81;

var maximumValue = Math.max(frobe, mamba, toronto);
console.log('The value of maximumValue is: ', maximumValue);

var heroes = ['batman', 'spiderman', 'deadpool', 'wolverine'];
var randomNumber = Math.random();
randomNumber *=heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex is: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero is: ', randomHero);

var library = [
  {
    title: 'The Godfather',
    author: 'Mario Puzo'
  },
  {
    title: 'Wiseguy',
    author: 'Nicholas Pileggi'
  },
  {
    title: 'I Heard You Paint Houses',
    author: 'Charles Brandt'
  }

];
var lastBook = library.pop();
console.log('The value of lastBook is: ', lastBook);
var firstBook = library.shift();
console.log('The value of firstBook is: ', firstBook);
var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library is: ', library);


var fullName = 'Udaibir Virk'
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName is: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName is: ', sayMyName);
