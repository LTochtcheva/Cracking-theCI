//Implement an algorithm to determine if a string has all unique
//characters.
//What if you can't use additional data structures?
export const funcSet = (str) => {

  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) return false;
    else set.add(str[i]);
  }
  return true;
}

export const funcSort = (str) => {
  let sortedStr = str.split('').sort();
  for (let i = 0; i < sortedStr.length; i++) {
    if (sortedStr[i] === sortedStr[i+1]) return false;
  }
  return true;
}
