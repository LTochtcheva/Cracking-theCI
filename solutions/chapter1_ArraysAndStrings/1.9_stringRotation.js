// Given str1 and str2 check if str2 is a rotation of str1, using one call
// to isSubstring
// waterbottle is rotation of erbottlewat -> true

export default (str1, str2) => {
  let doubleStr1 = str1 + str1;
  if (str1.length !== str2.length) return false;
  else return doubleStr1.includes(str2);
}
