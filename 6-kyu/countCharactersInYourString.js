function count (string) {  
  const lettersObj = {}; 
  for (const char of string) {
    !(char in lettersObj)? lettersObj[char] = 1 : lettersObj[char]++; 
  }
  return lettersObj; 
}
