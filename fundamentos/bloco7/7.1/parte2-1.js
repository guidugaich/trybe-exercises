// function factorial(n) {
//   let product = n;
//   while (n > 1) {
//     product = product * (n - 1);
//     n -= 1;
//   }
//   console.log(product);
// }

// factorial(6);

const factorial = (n) => (n > 1) ? n * factorial(n - 1) : 1;

console.log(factorial(5));