const assert = require('assert');

const greetPeople = (people) => {
  let greetingArray = [];
  let greeting = 'Hello ';

  for (const person in people) {
    greetingArray.push(`Hello ${people[person]}`);
  }
  return greetingArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// testes
assert.deepStrictEqual(greetPeople(parameter), result);