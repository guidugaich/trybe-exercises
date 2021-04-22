const myRemove = require('./parte1-ex2');

test('verificar a funcao myRemove', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  const myArray = [1, 2, 3, 4]
  myRemove(myArray, 3);
  expect(myArray).toEqual([1, 2, 3, 4]);
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})