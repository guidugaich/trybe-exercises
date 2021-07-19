// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function returnMostFrequentInteger (intArray) {
    
    // Criar um objeto numberCount que tem as chaves como os numeros do array
    // e os valores como sua frequencia/numero de ocorrencias
    numberCount = {};
    for (index = 0; index < intArray.length; index += 1) {
        if (intArray[index] in numberCount) {
            numberCount[intArray[index]] += 1;
        } else {
            numberCount[intArray[index]] = 1;
        }
    }

    // Buscar o inteiro mais frenquente dentro de numberCount
    let mostFrequentInteger = 0;
    let highestCount = 0;

    for (let key in numberCount) {
        if (numberCount[key] > highestCount) {
            mostFrequentInteger = key;
            highestCount = numberCount[key];
        }
    }

    return mostFrequentInteger;
}

console.log(returnMostFrequentInteger([2, 3, 2, 5, 8, 2, 3]));
