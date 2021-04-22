const myRemoveWithoutCopy = require('./parte1-ex3.js');

test('verifica a funcao myRemoveWithoutCopy', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  const myArray = [1, 2, 3, 4];
  myRemoveWithoutCopy(myArray, 3);
  expect(myArray).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);

})