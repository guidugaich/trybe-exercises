const fetch = require('node-fetch');

const endPointURL = 'https://api.chucknorris.io/jokes/random?';

console.log('antes do fetch');

const promise = new Promise((resolve, reject) => {
  const joke = fetch(endPointURL).then(data => data.json());
  resolve(joke);
})

console.log('fim do código');
console.log(promise.then(joke => console.log(joke.value)))