const fs  = require('fs');

const fileName = 'test.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) return console.log(err.errno);
  console.log('olaola')
});