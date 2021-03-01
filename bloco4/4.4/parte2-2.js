// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function returnLargestIntegerIndex(integers) {
    let largestIntegerIndex = 0;
    for (let index = 1; index <= integers.length; index += 1) {
        if (integers[index] > integers[largestIntegerIndex]) {
            largestIntegerIndex = index;
        }
    }
    return largestIntegerIndex;
}

console.log(returnLargestIntegerIndex([2, 4, 6, 7, 10, 0, -3]));