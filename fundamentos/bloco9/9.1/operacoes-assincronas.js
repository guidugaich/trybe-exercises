
const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
}
let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha