const promise = new Promise((resolve, reject) => {
  const randomArray = [];
  for (let index = 0; index < 10; index += 1) {
    let number = Math.ceil(Math.random() * 50);
    randomArray.push(number);
  }

  randomArraySquaredSum = randomArray.map((n) => n ** 2).reduce((a, b) => a + b);

  if (randomArraySquaredSum < 8000) {
    return resolve(randomArraySquaredSum);
  } 
  reject(randomArraySquaredSum);
})

promise
  .then(number => console.log(`nice number: ${number}`))
  .catch(number => console.log(`bullshit: ${number}`));