// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function returnLargestName (nameArray) {
    let largestName = '';
    for (let index = 0; index < nameArray.length; index += 1) {
        if (nameArray[index].length > largestName.length) {
            largestName = nameArray[index];
        }
    }
    return largestName;
}

console.log(returnLargestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));