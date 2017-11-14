// #### Problem ####
// Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

// The array that is returned should only contain unique values.

export default (string) => {
  let results = [];
  let letters = string.split('');
  results.push([letters.shift()]);
  //insert each letter in every possible position
  while (letters.length) {
    let curLetter = letters.shift();
    let tempResults = [];
    results.forEach(curRes => {
      for (let i=0; i<=curRes.length; i++) {
        let temp = curRes.slice() //just a copy
        temp.splice(i,0,curLetter) //insert current letter at current position
        tempResults.push(temp);
      }
    });
    results = tempResults;
  }
  results = results.map(arr => arr.join(''));
  results = results.filter((el,i) => {
    return results.indexOf(el) === i;
  });
  return results;
}
