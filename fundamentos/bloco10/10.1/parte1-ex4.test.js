const myFizzBuzz = require('./parte1-ex4.js');

test('testa myFizzBuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(9)).toBe('fizz');
  expect(myFizzBuzz(10)).toBe('buzz');
  expect(myFizzBuzz(13)).toBe(13);
  expect(myFizzBuzz('oi')).toBe(false);
});