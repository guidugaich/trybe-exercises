const objects = require('./parte1-ex5.js');

const obj1 = objects.obj1;
const obj2 = objects.obj2;
const obj3 = objects.obj3;

test('compare objects', () => {
  expect(obj1).toEqual(obj2);
  expect(obj1).not.toEqual(obj3);
})