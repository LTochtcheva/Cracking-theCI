// Given two strings, write a method to decide if one is a
// permutation of the other

 export default (str1, str2) => {
  let arr1 = str1.split('').sort();
  let arr2 = str2.split('').sort();

  if (arr1.every((el, i) => el === arr2[i])) return true;
  else return false;

}
