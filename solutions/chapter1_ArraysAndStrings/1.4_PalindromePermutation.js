// Given a string write a method to check if it is a
// permutation of palindrome
// Palindrome - word or phrase that is the same forwards and backwards.
// Permutation - rearrangement of letters
// input "Tact Coa"
// output True, permutations: "taco cat", "atco cta", ...

export default (str) => {

  if (!str) return false;

  let string = str.toLowerCase().split(' ').join('');
  let lettersCount = new Set();

  for (let i = 0; i < string.length; i++) {
    if (lettersCount.has(string[i])) lettersCount.delete(string[i]);
    else lettersCount.add(string[i]);
  }
  return lettersCount.size <= 1;
}
