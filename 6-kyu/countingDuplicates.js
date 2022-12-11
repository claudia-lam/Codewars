  function duplicateCount(text){
    text = text.toLowerCase(); 
    const letterCountObj = {}; 
    for (const letter of text) {
      (letter in letterCountObj)? letterCountObj[letter]++ : letterCountObj[letter] = 1; 
    }
    return Object.values(letterCountObj).filter(num => num > 1).length;  
    }