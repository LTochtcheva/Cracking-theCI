import { expect } from 'chai';
import func from '../solutions/chapter1_ArraysAndStrings/1.2_CheckPermutation.js';

describe('check if one string is a permutation of the other:\n', () => {

  it('should return true for two empty strings', () => {
    expect(func('', '')).to.equal(true);
  });

  it('should return correct value if permutation', () => {
    expect(func('abcd', 'dbac')).to.equal(true);
    expect(func('tyuiop[]', '][poiuyt')).to.equal(true);
  });

  it('should return correct value if NO permutation', () => {
    expect(func('abbb', 'dbac')).to.equal(false);
    expect(func('tyuiop[]', '][po')).to.equal(false);
  });
});
