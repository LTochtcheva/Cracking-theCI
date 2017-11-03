import { expect } from 'chai'
import func from '../../solutions/practice/balancedBrackets'

describe('a function that determines whether an input string has balanced brackets', () => {

  it('should return a correct result for strings made of brackets only', () => {
    expect(func('[][(){}')).to.equal(false)
    expect(func('({{}})')).to.equal(true)
  })
  it('should return a correct result for strings made of brackets and text', () => {
    expect(func('text ( is allowed ){rwwrwrrww [] ()}')).to.equal(true)
    expect(func('text ( is allowed )  ] ()}')).to.equal(false)
  })
})

