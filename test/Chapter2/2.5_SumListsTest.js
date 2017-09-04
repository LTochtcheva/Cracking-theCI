import { expect } from 'chai'
import * as utils from './utilsChapter2'
import {sumReversed, sumForward} from '../../solutions/chapter2_LinkedLists/2.5_SumLists'

describe.only('Sum two numbers represented by a linked list:\n', () => {

    let testData = [
    {list1: [1, 2],
     list2: [3, 4],
     result1: [4, 6],
     result2: [4, 6]},
    {list1: [1, 2, 1, 3],
     list2: [3, 4],
     result1: [4, 6, 1, 3],
     result2: [1, 2, 4, 7]},
    {list1: [1, 2],
     list2: [3, 4, 5],
     result1: [4, 6, 5],
     result2: [3, 5, 7]},
    {list1: [1, 2],
     list2: [9, 8],
     result1: [0, 1, 1],
     result2: [1, 1, 0]}
  ]

    testData.forEach(data => {
      xit(`should return a sum of nums ${data.list1} and ${data.list2},represented by reversed linked list: `, () => {
        let list1 = utils.arrayToLinkedList(data.list1)
        let list2 = utils.arrayToLinkedList(data.list2)
        let sum = sumReversed(list1, list2)
        expect(utils.linkedListToArray(sum)).to.eql(data.result1)
      })
    })

    testData.forEach(data => {
      it(`should return a sum of nums represented by direct linked list:  ${data.list1}, ${data.list2} `, () => {
        let list1 = utils.arrayToLinkedList(data.list1)
        let list2 = utils.arrayToLinkedList(data.list2)
        let sum = sumForward(list1, list2)
        expect(utils.linkedListToArray(sum)).to.eql(data.result2)
      })
    })

})
