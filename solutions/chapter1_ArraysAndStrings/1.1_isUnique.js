//Implement an algorithm to determine if a string has all unique
//characters.
//What if you can't use additional data structures?
export default  (str) => {
  console.log('func is running' );
  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) return false;
    else set.add(str[i]);
  }
  return true;
}
