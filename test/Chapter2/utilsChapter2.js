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
  let arr = []
  let node = list

  while (node !== null) {
    arr.push(node.val)
    node = node.next
  }

  return arr
}
export function createLinkedList() {
  return {
    head: null,
    tail: null
  };
}
export function pushSingle(list, value) {
  const node = createNode(value);
  if (list.head) {
    list.tail.next = node;
    list.tail = node;
  }
  else {
    list.head = node;
    list.tail = node;
  }
}
export const getListLength = (list) => {
  let length = 0
  while (list) {
    length++
    list = list.next
  }
  return length
}
