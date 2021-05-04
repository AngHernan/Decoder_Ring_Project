
const caesarModule = (function () {

var alpha = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ].join('')
var revAlpha = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ].reverse().join('')
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
