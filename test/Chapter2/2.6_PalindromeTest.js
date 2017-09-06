import { expect } from 'chai'
import * as utils from './utilsChapter2'
import func  from '../../solutions/chapter2_LinkedLists/2.6_Palindrome'

describe.only('method to check if linked list is a palindrome:\n', () => {
  const good = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 2, 3, 4, 5, 4, 3, 2, 1]
  ]
  const bad = [
    [1, 2, 3],
    [3, 4, 6, 8, 2],
    [1, 9, 9, 2, 4, 7, 8, 8]
  ]
  good.forEach(arr => {
    it(`should return true for list ${arr}`, () => {
      let list = utils.arrayToLinkedList(arr)
      expect(func(list)).to.equal(true)
    })
  })

  bad.forEach(arr => {
    it(`should return false for non-polindrome ${arr}`, () => {
      let list = utils.arrayToLinkedList(arr)
      expect(func(list)).to.equal(false)
    })
  })
})

