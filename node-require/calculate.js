const add = require('./add');
const substract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
let result = 0;
let x1 = Number(process.argv[2]);
let operation = process.argv[3];
let y1 = Number(process.argv[4]);
if(operation === 'plus'){
  result = x1 + y1
}
if(operation === 'minus'){
  result = x1 - y1;
}
if(operation === 'times'){
  result = x1 * y1;
}
if(operation === 'over'){
  result = x1 / y1;
}
console.log('Result: ',result);
