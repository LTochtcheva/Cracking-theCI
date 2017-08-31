// Implement an algorithm to find Kth to last
//element of a singly linked list
// 0th will return last element
//[1,2,3,4,5,6],0 -> 6
//[1,2,3,4,5,6],3 -> 3
//return null if list is not long enough

export default (list, k) => {
  const places = {}
  let pointer = 0
  while (list) {
    places[pointer] = list.val
    pointer ++
    list = list.next
  }
  return places[pointer - 1 - k] || null
}
