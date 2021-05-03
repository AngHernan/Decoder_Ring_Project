// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const grid = [ ['a', 'b', 'c', 'd', 'e'], 
                  ['f', 'g', 'h', '(i/j)', 'k'], 
                  ['l', 'm', 'n', 'o', 'p'], 
                  ['q', 'r', 's', 't', 'u'], 
                  ['v', 'w', 'x', 'y', 'z'] 
                ];

  function rowFinder(letter){
    for (row in grid){
    if(grid[row].includes(letter) === true){ 
        return Number(row);}
    }
}

  function columnFinder(letter, row){
    return grid[row].indexOf(letter);
}

  function wordEncode(word){
    const newWord = word.toLowerCase();
    let number = "";

    for(let i = 0; i < newWord.length; i++){
      let letter = newWord[i];
      if(letter === 'i' || letter === 'j'){
        number += '42';
      }
      else {
      let letterRow = rowFinder(letter);
      let letterCol = columnFinder(letter, letterRow);
      number += String(letterCol + 1) + String(letterRow + 1);
    
    }
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
    if (encode === false && input.split(" ").join("").length % 2 !==0){
      return false;
    }
    else if (encode !== false){
      for (word in words){
        phrase.push(wordEncode(words[word]));

      }
    } else {
        for (num in words){
          phrase.push(numberDecode(words[num]));
    }
  }
    return phrase.join(' ');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
