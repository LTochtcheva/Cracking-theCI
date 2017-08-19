// Implement a method to perform basic string compression using the counts
// of repeated chars.
// "aabcccccaaa" -> "a2b1c5a3"
// if compressed is not shorter than original, return original string

export default (str) => {

  if (!str) return str;

  let count = 1;
  let result = '';

  for (let i = 0; i < str.length; i ++) {

    if (str[i] === str[i + 1]) {
      count ++;
    }
    else {
      result = result + str[i] + count.toString();
      count = 1;
    }
  }
  return result.length < str.length ? result : str;
}
