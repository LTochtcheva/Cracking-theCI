// There are 3 types of edits for strings:
// insert a char
// remove a char
// replace a char
// Given two strings check if they are <= one edit away
// pale, ple -> true, 'a' removed
// pale, bale -> true, 'p' replaced with 'b'
// pale, pale -> true, 0 edits
// pale, bake -> false, 'p'-'b' and 'l'-'k', 2 edits

export default (str1, str2) => {

  if (Math.abs(str1.length - str2.length) > 1) return false;

  let inserted, removed;
  let oneEdit = false;

  if (str1.length < str2.length) {
    inserted = true;
  }
  if (str1.length > str2.length) {
    removed = true;
  }

  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {

    if (str1[i] !== str2[j]) {
      if(oneEdit) return false;
      if (inserted) i --;
      if (removed)  j --;
      oneEdit = true;
    }
  }
  return true;
}
