function isPalindrome(word) {
    let reverseWord = '';
    for (let char = 1; char <= word.length; char += 1) {
        reverseWord += word[word.length - char];
    }
    
    if (word == reverseWord) {
        return true;
    } else {
        return false;
    }
}