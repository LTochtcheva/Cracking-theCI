//Given a circular linked list, implement an algorithm
//that returns the node at the begining of the loop
// A->B->C->D->E->C. return C

export default (list) => {
  if (!list) return null
  let set = new Set()
  let current = list
  while (current) {
    if (set.has(current.val)) return current
    set.add(current.val)
    current = current.next
  }
  return null
}
