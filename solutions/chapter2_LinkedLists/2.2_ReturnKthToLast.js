// Implement an algorithm to find Kth to last
//element of a singly linked list
// 0th will return last element
//[1,2,3,4,5,6],0 -> 6
//[1,2,3,4,5,6],3 -> 3
//return null if list is not long enough

// export default (list, k) => {
//   const places = {}
//   let pointer = 0
//   while (list) {
//     places[pointer] = list.val
//     pointer ++
//     list = list.next
//   }
//   return places[pointer - 1 - k] || null
// }

// solution with two pointers

export default (list, k) => {
  let current = list
  let ahead = list
  let count = 0

  while (count <= k) {
    if (!ahead) return null
    ahead = ahead.next
    count++
  }
  while (ahead) {
    ahead = ahead.next
    current = current.next
  }

  return current.val
}
