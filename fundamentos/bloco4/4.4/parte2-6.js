// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function returnSum (n) {
    let sum = 0;
    for (let index = 1; index <= n; index += 1) {
        sum += index;
    }
    return sum;
}

console.log(returnSum(5));

