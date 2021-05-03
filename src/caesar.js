// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
var alphabet = require('alphabet')
var alpha = alphabet.lower.join('')
var revAlpha = alphabet.lower.reverse().join('')
  // you can add any code you want within this function scope
  //helper functions 

function calculatePosition(index, value){
    let newPos = index + Math.abs(value); 
    if (newPos >= 26){
      return newPos - 26;
    }
    else {
      return newPos;
  }
}

function translateLetter(letter, value, encode) {
    if (value > 0 && encode === true || value < 0 && encode === false){
      let position = alpha.indexOf(letter);
      let newPosition = calculatePosition(position, value);
      return alpha[newPosition];
    }
    if (value < 0 && encode === true || value > 0 && encode === false){
      let position = revAlpha.indexOf(letter);
      let newPosition = calculatePosition(position, value)
      return revAlpha[newPosition];
    }
  }
  //helper to decode/encode  

  //helper to 

function caesar(input, shift, encode = true) {
  if (shift > 25 || shift < -25 || shift === 0) {
    return false;
    }
  let newPhrase = "";
  let phrase = input.toLowerCase();


  for (let i = 0; i < phrase.length; i++){
    if (alpha.includes(phrase[i])){
      newPhrase += translateLetter(phrase[i], shift, encode)}
    else {
      newPhrase += phrase[i]
      }
    }
  return newPhrase;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
