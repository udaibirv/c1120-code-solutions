const takeAChance = require('./take-a-chance');
const promise1 = takeAChance('Udaibir');

promise1.then(resolve => {
  console.log(resolve);
});

promise1.catch((reject) => {
  console.error(reject.message)
});
