// Remove duplicates from an unsorted linked list
// input:  [1, 2, 3, 3, 4, 5, 4, 5],
// result: [1, 2, 3, 4, 5]

export default (list) => {

  // if (!list || !list.next) return list

  // const set = new Set()
  // set.add(list.val)

  // while (list.next) {

  //   if (set.has(list.next.val)) {
  //     list.next = list.next.next
  //   }
  //   else {
  //     set.add(list.next.val)
  //     list = list.next
  //   }
  // }


  if (!list || !list.next) return list
  const set = new Set()

  let prev = null
  while (list) {
    if (set.has(list.val)) {
      prev.next = list.next
    }
    else {
      set.add(list.val)
      prev = list
    }
    list = list.next
  }
}

