const fs = require('fs/promises');

const f = 'simpsons.json';

function readCharacterFromFile() {
  fs.readFile(f, 'utf8').then(data => {
    JSON.parse(data).forEach(c => console.log(`${c.id} - ${c.name}`))
  })
}

function getCharacterById(id) {
  return new Promise((resolve, reject) => {
    fs.readFile(f, 'utf8').then(data => {
      const characters = JSON.parse(data)
      resolve(characters.find(c => c.id == id))
    })
  })
}

// readCharacterFromFile();
getCharacterById(3).then(res => console.log(res));

