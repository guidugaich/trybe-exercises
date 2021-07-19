const sumjest = require('./parte1-ex1');

test('sums two values', () => {
  expect(sumjest(2, 3)).toBe(5);
  expect(sumjest(0, 0)).toBe(0);
  expect(() => sumjest(4, '5')).toThrow();
  expect(() => sumjest(4, '5')).toThrowError('parameters must be numbers');
});