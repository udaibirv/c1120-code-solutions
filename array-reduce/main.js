const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const reduce1 = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers.reduce(reduce1);
console.log("Sum: ", sum);

const reduce2 = (accumulator, currentValue) => accumulator * currentValue;
const product = numbers.reduce(reduce2);
console.log("Product: ", product);
const balance = account.reduce((total, transaction) => {
  if(transaction.type === 'deposit'){
    total+=transaction.amount;
  }
  if(transaction.type === 'withdrawal'){
    total-=transaction.amount;
  }
  return total;
}, 0);

console.log("balance: ", balance);
const reduce4 = (accumulator, currentValue) => Object.assign(accumulator, currentValue);
const composite = traits.reduce(reduce4);
console.log("Composite:", composite);
