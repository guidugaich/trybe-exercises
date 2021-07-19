// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function stringBelong (stringWord, stringEnding) {
    return (stringWord.substring(stringWord.length - stringEnding.length) == stringEnding);
}
console.log(stringBelong("joaofernando", "fernan"));

console.log(stringBelong("trybe", "be"));