import { expect } from 'chai'
import * as utils from './utilsChapter2'
import func  from '../../solutions/chapter2_LinkedLists/2.3_DeleteMiddleNode'

describe('method to delete given node  from linked list:\n', () => {

  let testData = [
    {input: [1, 2, 3],
     index: 1,
     result: [1, 3]},
    {input: [1, 2, 3, 4, 5, 6, 7, 8],
     index: 4,
     result: [1, 2, 3, 4, 6, 7, 8]},
    {input: [1, 2, 3, 8, 4, 5, 6, 7],
     index: 3,
     result: [1, 2, 3, 4, 5, 6, 7]},
  ]

  testData.forEach(data => {
    it(`returns correctly updated list ${data.input}`, () => {
      let list = utils.arrayToLinkedList(data.input)
      // create node to be deleted
      let node = list
      for (let i = 0; i < data.index; i++) {
        node = node.next
      }
      //update the list by deleting the node
      func(node)
      expect(utils.linkedListToArray(list)).to.eql(data.result)
    })
  })

  it('should throw an error if node is invalid', () => {
    let node = utils.arrayToLinkedList([1])
    expect(() => {func(node)}).to.throw('invalid node')
  })
})


