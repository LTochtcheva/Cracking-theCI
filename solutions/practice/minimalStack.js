// Stack Minimum

// implement a Stack data structure that has the following functions:
//  - `push(value)` to add elements (to the top of the stack)
//  - `pop()` removes the top element and returns its value
//  - `min()` returns the minmum element

// All of the above functions should run in constant ( O(1) ) time.
// No arrays or array methods should be used.

export const Node = function(value)  {
  this.value = value
  this.next = null // next to go, under the current
}

export class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }

push(value) {
  let node = new Node(value)
  if (this.top) {
    node.next = this.top
  }
  this.top = node
  this.size++
}
pop() {
  if (!this.top) return null
  let result = this.top.value
  this.top = this.top.next ? this.top.next : null
  this.size--
  return result
}
min() {
  let minimum = this.top.value
  if (this.size === 0) return null
  let current = this.top
  while (current) {
    if (current.value < minimum) {
      minimum = current.value
    }
    current = current.next
  }
  return minimum
}
}
