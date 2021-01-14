const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
console.log("All numbers multiplied by 2", doubled);

const prices = numbers.map(number => Number.parseFloat(number).toFixed(2));
console.log("All numbers formatted as prices", prices);

const upperCased = languages.map(word => word.toUpperCase());
console.log("All languages converted to uppercase", upperCased);

const firstLetters = languages.map(word => word[0]);
console.log("first letter of each language", firstLetters);
