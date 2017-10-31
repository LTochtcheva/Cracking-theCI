import { expect } from 'chai'
import func from '../../solutions/practice/bubbleSort'

describe.only('Bubble Sort algorithm', () => {
  it('should sort an array using bubble sort', () => {
    expect(func([2, 5, 8, 3, -1])).to.eql([-1, 2, 3, 5, 8])
  })
})
