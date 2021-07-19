function longestWord(sentence) {
  let wordsArraySortedByLength = sentence.split(' ').sort((a,b) => a.length - b.length);
  return wordsArraySortedByLength[wordsArraySortedByLength.length - 1] // retorna 'aconteceu'
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));


