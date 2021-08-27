const fs = require('fs/promises');

const f = 'simpsons.json';

function readCharacterFromFile() {
  fs.readFile(f, 'utf8').then(data => {
    JSON.parse(data).forEach(c => console.log(`${c.id} - ${c.name}`))
  })
}

function getCharacterById(id) {
  return new Promise((resolve, reject) => {
    fs.readFile(f, 'utf8')
      .then(data => {
        const characters = JSON.parse(data)
        resolve(characters.find(c => c.id == id))
      })
  })
}

async function changeFile1() {
  const oldContent = await fs.readFile('simpsons.json')
  const oldContentParsed = JSON.parse(oldContent);
  const newContent = oldContentParsed.filter(c => {
    if (c.id === '10' || c.id === '6') return false
    return true
  })
  console.log(newContent)
  fs.writeFile('simpsons.json', JSON.stringify(newContent))
}

async function changeFile2() {
  const oldContent = await fs.readFile('simpsons.json')
  let oldContentParsed = JSON.parse(oldContent);
  oldContentParsed = oldContentParsed.map(c => ({ ...c, id: parseInt(c.id)}));
  console.log(oldContentParsed)
  const newContent = oldContentParsed.filter(c => {
    if (c.id >= 1 && c.id <= 4) return true
    return false
  })
  console.log(newContent)
  fs.writeFile('simpsonFamily.json', JSON.stringify(newContent))
}


//readCharacterFromFile();
//getCharacterById(34).then(res => console.log(res));
// changeFile1();
changeFile2()

