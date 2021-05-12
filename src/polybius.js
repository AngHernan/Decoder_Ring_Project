

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const grid = [ ['a', 'b', 'c', 'd', 'e'], 
                  ['f', 'g', 'h', '(i/j)', 'k'], 
                  ['l', 'm', 'n', 'o', 'p'], 
                  ['q', 'r', 's', 't', 'u'], 
                  ['v', 'w', 'x', 'y', 'z'] 
                ];

  const rowFinder = function(letter){
    for (row in grid){
    if(grid[row].includes(letter)) return Number(row);
    }
}

  const columnFinder = function(letter, row){
    return grid[row].indexOf(letter);
}

  function wordEncode(word){
    const newWord = word.toLowerCase();
    let number = "";

    for(let i = 0; i < newWord.length; i++){
      let letter = newWord[i];
      if(letter === 'i' || letter === 'j') number += '42';
      let letterRow = rowFinder(letter);
      let letterCol = columnFinder(letter, letterRow);
      number += String(letterCol + 1) + String(letterRow + 1);
  }
    return number;
    
  }

  function numberDecode(number){
    let value = number.split('');
    let word = "";

    for (let i = 0; i < number.length; i+=2){
      let first = Number(value[i+1]) - 1 
      let second = Number(value[i]) - 1
      word += grid[first][second]; 
    }
    return word;
  }
  
  function polybius(input, encode = true) {
    let phrase = [];
    let words = input.split(' ');
    if (!encode && input.split(" ").join("").length % 2 !==0) return false;
    for (word in words){
      encode? phrase.push(wordEncode(words[word])) : phrase.push(numberDecode(words[word]));
  }
    return phrase.join(' ');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
