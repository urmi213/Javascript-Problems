function capitalizeWords(str) {
  let result = ""; 

  for (let word of str.split(' ')) {
    result += word[0].toUpperCase() + word.slice(1) + " ";
  }

  return result.trim(); 
}
console.log(capitalizeWords("hello world"));
