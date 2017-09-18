import { expect } from 'chai'
import * as utils from './utilsChapter2'
import func from '../../solutions/chapter2_LinkedLists/2.7_Intersection'

describe.only('Determine if two linked lists intersect:\n', () => {

    let testData = [
    {list1: [1, 2],
     list2: [3, 4]},
    {list1: [1, 2, 1, 3],
     list2: [3, 4]},
    {list1: [1, 2],
     list2: [9, 8]}
  ]

    testData.forEach(data => {
      it('should return a undefined if linked lists do not intersect: ', () => {
        let list1 = utils.arrayToLinkedList(data.list1)
        let list2 = utils.arrayToLinkedList(data.list2)
        expect(func(list1, list2)).to.be.undefined
      })
    })

    testData.forEach(data => {
      it('should return a correct node if two linked lists intersect: ', () => {
        let list1 = utils.createLinkedList()
          data.list1.forEach(el => { utils.pushSingle(list1, el)})
        let list2 = utils.createLinkedList()
          data.list2.forEach(el => { utils.pushSingle(list2, el)})
        let common = utils.arrayToLinkedList([9, 8, 4])

        list1.tail.next = common
        list2.tail.next = common

        expect(func(list1.head, list2.head)).to.equal(common)
      })
    })

})

