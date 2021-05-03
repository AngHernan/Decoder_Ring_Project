// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  var alphab = require('alphabet')
  var alpha = alphab.lower.reverse().join('')

  function wordEncode(input, alphabet){
    let newWord = "";
    for (let i = 0; i < input.length; i++){
  
      let index = alpha.indexOf(input[i]);
  
      let newLetter = alphabet[index]
      newWord += newLetter
      
    }
    
    return newWord;
  }

  function wordDecode(input, alphabet){
    let newWord = "";
    for (let i = 0; i < input.length; i++){
  
      let index = alphabet.indexOf(input[i]);
  
      let newLetter = alpha[index]
      newWord += newLetter
      
    }
    
    return newWord;
  }

  function checkRepeats(alphab){
    let alphabet = [];
    for(letter in alphab){
      alphabet.push(alphab[letter])
    }
    const check = alphabet.some((value, i) => alphabet.indexOf(value) !== i)
    return check;
  }
  function substitution(input, alphabet, encode = true) {
    let wordList = input.split(' ');
    let newWordList = []
    if(alphabet.length !== 26 || checkRepeats(alphabet) === true){
      return false;
    }
    else{
    for(word in wordList){
      if(encode === true){
        newWordList.push(wordEncode(wordList[word].toLowerCase(), alphabet))
      }
      else {
        newWordList.push(wordDecode(wordList[word].toLowerCase(), alphabet))
      }
    }
  }
    return newWordList.join(" ");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
