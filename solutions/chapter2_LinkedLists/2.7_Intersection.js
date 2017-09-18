//determine if two singly linked lists intersect
import getListLength from '../../test/Chapter2/utilsChapter2'

export default (a, b) => {
  let current = a
  let set = new Set()
  while (current) {
    set.add(current)
    current = current.next
  }
 current = b
  while (current) {
    if (set.has(current)) return current
    current = current.next
  }
}
