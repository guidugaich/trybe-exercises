const assert = require('assert');

<<<<<<< HEAD
const pushNumber = (list, number) => list.push(number);

=======
const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
}
>>>>>>> 96cf3b771be70a4a57432cf0943340b5672ea176
let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

<<<<<<< HEAD
assert.deepStrictEqual(numbers, [1, 2, 3]);
=======
assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha
>>>>>>> 96cf3b771be70a4a57432cf0943340b5672ea176
