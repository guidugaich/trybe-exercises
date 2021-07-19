
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names.reduce((acount, name) => {
    const characterArray = name.split('');
    return acount + characterArray.filter((character) => character === 'a' || character === 'A').length;
  }, 0)

}

assert.deepStrictEqual(containsA(), 20);