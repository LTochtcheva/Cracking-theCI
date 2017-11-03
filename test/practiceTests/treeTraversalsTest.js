import { expect } from 'chai'
import tree from './tree.js'
import { breadthFirst,
         depthFirstPreOrder,
         depthFirstPostOrder } from '../../solutions/practice/treeTraversals'

describe('Tree traversal algorithms', () => {

  it('should traverse a tree with breadthFirst', () => {
    expect(breadthFirst(tree)).to.eql(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'])
  })
  it('should traverse a tree with depthFirst PreOrder', () => {
    expect(depthFirstPreOrder(tree)).to.eql(['A', 'B', 'E', 'K', 'L', 'C', 'F', 'G', 'H', 'M', 'D', 'I', 'J'])
  })
  it('should traverse a tree with depthFirst PostOrder', () => {
    expect(depthFirstPostOrder(tree)).to.equal(true)
// check console.log
  })
})
