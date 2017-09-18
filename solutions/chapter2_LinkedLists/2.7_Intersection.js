//determine if two singly linked lists intersect

//O(A+B) time, O(A) space
// export default (a, b) => {
//   let current = a
//   let set = new Set()
//   while (current) {
//     set.add(current)
//     current = current.next
//   }
//  current = b
//   while (current) {
//     if (set.has(current)) return current
//     current = current.next
//   }
// }

//Book solution, O(A+B)/ O(1)
//get length and tail of each list
const getTailLength = (l) => {
  let list = l
  let length = 1
  while (list.next) {
    length++
    list = list.next
  }
  return { tail: list, length: length}
}
const getKthNode = (list, k) => {
  let node = list
  for (let i=k; i > 0; i--) {
    node = node.next
  }
  return node
}
//function itself
export default (a, b) => {
  let resA = getTailLength(a)
  let resB = getTailLength(b)
//different tails means there is no intersection
  if (resA.tail !== resB.tail) return

  let shorter = resA.length < resB.length ? a : b
  let longer = resA.length < resB.length ? b : a

//shift pointer for longer list by diff in lengths
  longer = getKthNode(longer, Math.abs(resA.length - resB.length))
//iterate over both untill intersection
  while (shorter !== longer) {
    shorter = shorter.next
    longer = longer.next
  }
  return shorter
}
