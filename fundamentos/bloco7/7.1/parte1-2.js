const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortNumerically = (array) => array.sort((a, b) => a - b);
const sortedArray = sortNumerically(oddsAndEvens);

console.log(`Os números ${sortedArray.join(',')} se encontram ordenados de forma crescente!`);