import { expect } from 'chai'
import * as utils from './utilsChapter2'
import func  from '../../solutions/chapter2_LinkedLists/2.2_ReturnKthToLast'

describe('method to find kth to last element of linked list:\n', () => {

  let testData = [
    {input: [1, 2, 3],
     k: 0,
     result: 3},
    {input: [1],
     k: 2,
     result: null},
    {input: [1, 2, 3, 4, 5, 6, 7, 8],
     k: 4,
     result: 4},
    {input: [1, 2, 3, 3, 4, 5, 4, 5],
     k: 3,
     result: 4},
  ]

  testData.forEach(data => {
    it(`returns ${data.k}th to the last element of ${data.input}`, () => {
      let list = utils.arrayToLinkedList(data.input)
      expect(func(list, data.k)).to.eql(data.result)
    })
  })

})

