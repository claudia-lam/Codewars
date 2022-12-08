function duplicateCount(text){
    const lettersObj = text.split('').reduce((obj,letter) => {
      letter = letter.toLowerCase(); 
      (letter in obj)? obj[letter]++ : obj[letter] = 1;  
      return obj; 
    }, {}); 
    return Object.values(lettersObj).filter(num => num > 1).length; 
  }