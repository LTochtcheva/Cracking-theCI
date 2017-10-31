import { expect } from 'chai'
import * as utils from './utilsChapter2'
import func from '../../solutions/chapter2_LinkedLists/2.8_LoopDetection'

describe('Function that returns the begining of the loop: \n', () => {
  beforeEach(function()  {
    this.list = utils.createLinkedList()
    })

  it('should return null for empty list: ', function() {
    expect(func(this.list)).to.equal(null)
  })

  it('should return null if there is no loop: ', function()  {
    utils.push(this.list, 1, 2, 3, 4)
    expect(func(this.list.head)).to.equal(null)
  })

  it('should return correct node if there is a loop1: ', function() {
    utils.push(this.list, 1, 2, 3, 4)
    let node = this.list.head
    this.list.tail.next = node
    expect(func(this.list.head)).to.equal(node)
  })

  it('should return correct node if there is a loop2: ', function() {
    utils.push(this.list, 1, 2, 3, 4)
    let node = this.list.head.next.next
    this.list.tail.next = node
    expect(func(this.list.head)).to.equal(node)
  })

  it('should return correct node if there is a loop3: ', function() {
    utils.push(this.list, 1, 2, 3, 4)
    let node = this.list.tail
    this.list.tail.next = node
    expect(func(this.list.head)).to.equal(node)
  })
})


