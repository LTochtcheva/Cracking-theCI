//Given a circular linked list, implement an algorithm
//that returns the node at the begining of the loop
// A->B->C->D->E->C. return C

// export default (list) => {
//   if (!list) return null
//   let set = new Set()
//   let current = list
//   while (current) {
//     if (set.has(current.val)) return current
//     set.add(current.val)
//     current = current.next
//   }
//   return null
// }

//book solution with two pointers, O(N) time, O(1) space
export default (list) => {
  if (!list || !list.next) return null
  let slow = list
  let fast = list
//check if pointers collide
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) break
  }
// check if the list is not circular
  if (!fast || !fast.next) return null

//leave fast at the collision point, move slow to the head,
//traverse to the beginning of the loop with same speed
  slow = list
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
