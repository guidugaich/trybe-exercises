let n = 12;
let isPrime = true;

for (let index = 2; index < n; index += 1) {
    if (n % index == 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);
