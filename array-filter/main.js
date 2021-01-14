const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("All numbers that are divisible by 2: ", evenNumbers);

const overFive = numbers.filter(num => num > 5);
console.log("All numbers that are greater than 5", overFive);

const startWithE = names.filter(name => name.startsWith('E'));
console.log("All names that start with letter E", startWithE);



const haveD = names.filter(name => name.includes('D') || name.includes('d'));
console.log("All names that have D or d", haveD);
