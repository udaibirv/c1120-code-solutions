const fs = require('fs');
let random = Math.random();
fs.writeFile('random.txt', random, 'utf8', (err, data) => {
  console.log('Saved!');
})
