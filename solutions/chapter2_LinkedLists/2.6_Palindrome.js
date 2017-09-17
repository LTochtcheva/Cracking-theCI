//Write a function to check if a linked list is a palindrome

//naive
// export default (list) => {

//   const nodes = []
//   let current = list
//   while (current) {
//     nodes.push(current)
//     current = current.next
//   }

//   while (list) {
//     if (list.val !== nodes.pop().val) return false
//     list = list.next
//   }

//   return true
// }

//create reversed list, check half the length
// export default (list) => {
//   let head = null
//   let count = 0
//   let current = list

//   while (current) {
//     let newNode = {val: current.val,
//                    next: head}
//     head = newNode
//     current = current.next
//     count++
//   }
//   for (let i=0; i<=Math.floor(count/2); i++) {
//     if (list.val !== head.val) return false
//     head = head.next
//     list = list.next
//   }
//   return true
// }

//iterate with 2 pointers, don't know the length of the list
//on each step slow moves to next, fast twice faster, moves to next.next
//when fast hits next null, slow is in the middle

// export default (list) => {
//   let slow = list
//   let fast = list
//   let stack = []

//   while (fast && fast.next) {
//     stack.push(slow.val)
//     slow = slow.next
//     fast = fast.next.next
//   }

//   // If list length is odd, move slow pointer past the middle node.
//   if (fast) slow = slow.next

//   while (stack.length) {
//     if (stack.pop() !== slow.val) return false
//     slow = slow.next
//   }

//   return true
// }

//recursive solution

export default (list) => {
  const l = getListLength(list)
  const resultObj = isPalindromeRecurse(list, l)
  return resultObj.result
}

const isPalindromeRecurse = (list, size) => {
  //length is even
  if (!list || size === 0) {
    return { node: list, result: true }
  }
  //length is odd
  else if (size === 1) {
    return { node: list.next, result: true}
  }

  //recursive call
  const res = isPalindromeRecurse(list.next, size - 2)
  if (!res.result || !res.node) return res

  res.result = (list.val === res.node.val)
  res.node = res.node.next
  return res
}


const getListLength = (list) => {
  let length = 0
  while (list) {
    length++
    list = list.next
  }
  return length
}
