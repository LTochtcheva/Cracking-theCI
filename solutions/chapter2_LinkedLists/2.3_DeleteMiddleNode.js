// Delete a node in the middle of a singly linked list
//given node 3 as part of 1-2-3-4 -> list will be 1-2-4

export default (node) => {
  if (!node || !node.next) throw Error('invalid node')
  node.val = node.next.val
  node.next = node.next.next
}
