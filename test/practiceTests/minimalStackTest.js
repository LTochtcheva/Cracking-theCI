import { expect } from 'chai'
import { Stack } from '../../solutions/practice/minimalStack'

let testStack = new Stack()
testStack.push(1)
testStack.push(2)
testStack.push(3)
testStack.push(4)
testStack.push(5)

describe('Stack Data structure', () => {
  it('has a push method to add elements to the top', () => {
    expect(testStack.top.value).to.equal(5)
    expect(testStack.size).to.equal(5)
  })
  it('has a pop method to remove an element and return its value', () => {
    let top1 = testStack.pop()
    let top2 = testStack.pop()
    expect(top1).to.equal(5)
    expect(top2).to.equal(4)
    expect(testStack.size).to.equal(3)
  })
  it('has a min method to return the minmum element', () => {
    expect(testStack.min()).to.equal(1)
  })
})
