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
  const diff = getLength(list1) - getLength(list2)
  if (diff > 0) list2 = makeEql(list2, diff)
  if (diff < 0) list1 = makeEql(list1, Math.abs(diff))

  const sum =  sumEql(list1, list2)

  if (!sum.plusOne) return sum.nodeSum
  else return insertBefore(sum.nodeSum, sum.plusOne)
}
// helper functions:
//~~ -------------------------- ~~
const getLength = (list) => {
  let length = 0
  while (list) {
    length ++
    list = list.next
  }
  return length
}
const makeEql = (list, diff) => {
  while (diff > 0) {
    let newNode = {val: 0,
               next: list}
    list = newNode
    diff--
  }
 return list
}
const insertBefore = (list, val) => {
  let newNode = {val: val, next: null}
  if (list) newNode.next = list
  return  newNode
}
class PartialSum {
  constructor() {
    this.nodeSum = null;
    this.plusOne = 0;
  }
}
//~~ --------------------------- ~~

const sumEql = (x, y) => {
  if (!x && !y) return new PartialSum()

  const sum = sumEql(x.next, y.next),
        value = x.val + y.val + sum.plusOne,
        sumNode = insertBefore(sum.nodeSum, value % 10)

  sum.nodeSum = sumNode
  sum.plusOne = Math.floor(value / 10)

 return sum
}


