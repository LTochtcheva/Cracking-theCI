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

  return sumEql(list1, list2)
}

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
const sumEql = (x, y) => {
  console.log('x: ',x,'y: ',y)
  if (!x && !y) return null
  let sumList = {val: null, next: null}
  let plusOne
  if (!x.next) plusOne = 0
  else {
    let nextSum = x.next.val + y.next.val
    plusOne = nextSum > 9 ? 1 : 0}

    let value = x.val + y.val + plusOne
    console.log('value: ',value) //11
    if (value > 9) {
      sumList.val = value%10
      console.log('sumList before insert: ', sumList)
      sumList = insertBefore(sumList, 1)
      console.log('sumList after insert', sumList)//!!!!!
    }
    else {
      sumList.val = value
    }

    sumList.next = sumEql(x.next, y.next)
    console.log('sumList: ',sumList)
 return sumList
}
const insertBefore = (list, val) => {
  console.log(list,val)
  let newNode = {val: val, next: null}
  if (list) newNode.next = list
  return  newNode
}

