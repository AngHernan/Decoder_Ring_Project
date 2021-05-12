

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  var alpha = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ].join('')

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
    if(alphabet.length !== 26 || checkRepeats(alphabet) === true) return false;
    for(word in wordList){
      if(encode === true){
        newWordList.push(wordEncode(wordList[word].toLowerCase(), alphabet))
      }
      else {
        newWordList.push(wordDecode(wordList[word].toLowerCase(), alphabet))
      }
  }
    return newWordList.join(" ");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
