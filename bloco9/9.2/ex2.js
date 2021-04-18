const promise = new Promise((resolve, reject) => {
  const randomArray = [];
  for (let index = 0; index < 10; index += 1) {
    let number = Math.ceil(Math.random() * 50);
    randomArray.push(number);
  }

  randomArraySquaredSum = randomArray.map((n) => n ** 2).reduce((a, b) => a + b);

  if (randomArraySquaredSum < 8000) {
    divisorArray = [2, 3, 5, 10];
    return resolve(divisorArray.map((divisor) => randomArraySquaredSum / divisor));
  } 
  reject(randomArraySquaredSum);
})

promise
  .then(array => array.reduce((a, b) => a + b))
  .then(sum => console.log(sum))
  .catch(number => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));