// write a series of iterator functions for trees:
// * `breadthFirst`
// * `depthFirstPreOrder`
// * `depthFirstPostOrder`
// Inorder (Left, Root, Right)
// Preorder (Root, Left, Right)
// Postorder (Left, Right, Root)

//A tree is represented by its root node,
// One node of that tree might look like this:

// {
//   value: 'a',
//   children: [
//   { value: 'b', children: [Object] },
//           { value: 'c', children: [Object] },
//           { value: 'd', children: [Object] }
//   ]
// }

export const breadthFirst = (tree) => {
  let result = []
  let queue = [tree]
  while (queue.length !== 0) {
    let currentNode = queue.shift()
    result.push(currentNode.value)
    queue.push(...currentNode.children)
  }
  return result
}
export const depthFirstPreOrder = (tree) => {
  let result = []
  let queue = [tree]
  while (queue.length !== 0) {
    let currentNode = queue.shift()
    result.push(currentNode.value)
    queue.unshift(...currentNode.children)
  }
  return result
}
export const depthFirstPostOrder = (tree) => {

  tree.children.forEach(child => {
    depthFirstPostOrder(child)
  })
  console.log(tree.value)
  return true
}

