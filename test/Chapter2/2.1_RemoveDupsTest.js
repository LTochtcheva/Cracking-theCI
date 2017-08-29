import { expect } from 'chai'
import * as utils from './utilsChapter2'
import func  from '../../solutions/chapter2_LinkedLists/2.1_RemoveDups'

describe('method to remove duplicates from linked list:\n', () => {

  let testData = [
    {input: [1, 2, 3],
     result: [1, 2, 3]},
    {input: [1],
     result: [1]},
    {input: [1, 1, 1],
     result: [1]},
    {input: [1, 2, 3, 3, 4, 5, 4, 5],
     result: [1, 2, 3, 4, 5]},
  ]

  testData.forEach(data => {
    it(`correctly changes given list:  ${data.input} `, () => {
      let list = utils.arrayToLinkedList(data.input)
      expect(utils.linkedListToArray(func(list))).to.eql(data.result)
    })
  })

})
