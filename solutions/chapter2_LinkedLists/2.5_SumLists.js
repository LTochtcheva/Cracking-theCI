//1)Sum two numbers, represented by a linked list in
//reverse order
//7-1-6 + 5-9-2 = 617+295 = 912 -> 2-1-9

export const sumReversed = (list1, list2, plusOne = 0) => {
  if (!list1 && !list2 && !plusOne) return null

  let sumList = {val: null, next: null}
  let value = plusOne
  if (list1) value += list1.val
  if (list2) value += list2.val
  sumList.val = value % 10

  sumList.next = sumReversed(list1? list1.next : null, list2? list2.next : null, value > 9 ? 1 : 0)
  return sumList
}

export const sumForward = (list1, list2) => {

  return true
}
