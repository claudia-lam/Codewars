function getDomainName(url){
  let doubleSlashes = '//'; 
  const urlArr = url.split('.'); 
  if (urlArr[0].slice(-3) === 'www') {
    return urlArr[1]; 
  } else if (urlArr[0].includes(doubleSlashes)) {
     const noSlashesArr = urlArr[0].split(doubleSlashes); 
    return noSlashesArr[1]; 
  } else {
    return urlArr[0]; 
  }
}