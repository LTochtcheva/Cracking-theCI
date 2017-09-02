import { expect } from 'chai'
import * as utils from './utilsChapter2'
import func  from '../../solutions/chapter2_LinkedLists/2.4_Partition'

describe('method to partition a linked list around given value:\n', () => {

  let testData = [
    {input: [1, 2, 3, 4, 5],
     val: 6,
     result: [1, 2, 3, 4, 5]},
    {input: [1, 2, 3, 4, 5],
     val: 1,
     result: [1, 2, 3, 4, 5]},
    {input: [1, 2, 3, 4, 5],
     val: 3,
     result: [1, 2, 3, 4, 5]},
    {input: [1, 3, 2, 8, 4, 5],
     val: 3,
     result: [1, 2, 3, 8, 4, 5]},
     {input: [1, 9, 3, 2, 8, 4, 5],
     val: 3,
     result: [1, 2, 9, 3, 8, 4, 5]}
  ]

  testData.forEach(data => {
    it(`correctly updates given list ${data.input} around value ${data.val} `, () => {
      let list = utils.arrayToLinkedList(data.input)
      expect(utils.linkedListToArray(func(list, data.val))).to.eql(data.result)
    })
  })

})

