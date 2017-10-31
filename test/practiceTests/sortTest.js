import { expect } from 'chai'
import bubble from '../../solutions/practice/bubbleSort'
import { mergeFunc, sortFunc } from '../../solutions/practice/mergeSort'
import { quickSort } from '../../solutions/practice/quickSort'

describe.only('Sorting algorithms', () => {
  it('should sort an array using bubble sort', () => {
    expect(bubble([2, 5, 8, 3, -1])).to.eql([-1, 2, 3, 5, 8])
  })
  it('should sort an array using merge sort', () => {
    expect(sortFunc([3, 2, 8, 1, 5])).to.eql([1, 2, 3, 5, 8])
  })
  it('should merge two arrays using merge func', () => {
    expect(mergeFunc([2], [])).to.eql([2])
  })
  it('should sort an array using quick sort', () => {
    expect(quickSort([3, 2, 8, 1, 5])).to.eql([1, 2, 3, 5, 8])
  })
})
