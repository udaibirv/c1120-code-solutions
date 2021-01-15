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

const depositArray = [];
const withdrawalArray = [];
for(let i = 0; i < account.length; i++){
  if(account[i].type === 'deposit'){
    depositArray.push(account[i].amount);
  }
  if(account[i].type === 'withdrawal'){
    withdrawalArray.push(account[i].amount);
  }
}
const reduce3 = (accumulator, currentValue) => accumulator + currentValue;
const totalDeposit = depositArray.reduce(reduce3);
const totalWithdrawal = withdrawalArray.reduce(reduce3);
console.log("Balance: ", totalDeposit - totalWithdrawal);

const reduce4 = (accumulator, currentValue) => Object.assign(accumulator, currentValue);
const composite = traits.reduce(reduce4);
console.log("Composite:", composite);
