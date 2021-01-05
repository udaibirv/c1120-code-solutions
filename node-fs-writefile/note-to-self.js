const fs = require('fs');
let input = process.argv[2];
fs.writeFile('note.txt', input, 'utf8', (err, data) => {
  console.log('note saved!');
})
