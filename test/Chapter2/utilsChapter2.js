export function createNode(val, next = null) {
  return {
    val,
    next
  }
}

export function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null
  }

  let list = null
  for (let i = arr.length - 1; i >= 0; --i) {
    list = createNode(arr[i], list)
  }

  return list
}
export function linkedListToArray(list) {
  let arr = [],
    node = list
  while (node !== null) {
    arr.push(node.val)
    node = node.next
  }

  return arr
}

