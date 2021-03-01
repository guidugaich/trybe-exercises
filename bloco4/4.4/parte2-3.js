// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function returnSmallestIntegerIndex(integers) {
    let smallestIntegerIndex = 0;
    for (let index = 1; index <= integers.length; index += 1) {
        if (integers[index] < integers[smallestIntegerIndex]) {
            smallestIntegerIndex = index;
        }
    }
    return smallestIntegerIndex;
}

console.log(returnSmallestIntegerIndex([2, 4, 6, 7, 10, 0, -3]));