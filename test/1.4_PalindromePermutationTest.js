import { expect } from 'chai';
import func from '../solutions/chapter1_ArraysAndStrings/1.4_PalindromePermutation.js';

describe('method to check if given is a permutation of palindrome:\n', () => {

  it('should return true if string is a permutation of palindrome', () => {
    expect(func('Tact Coa')).to.equal(true);
    expect(func('Hannah')).to.equal(true);
    expect(func('Viad ivad')).to.equal(true);
    expect(func('ab ab')).to.equal(true);
  });

  it('should return false if string is NOT a permutation of palindrome', () => {
    expect(func('Hello World')).to.equal(false);
    expect(func('Hi')).to.equal(false);
  });

  it('should return false for invalid input', () => {
    expect(func('')).to.equal(false);
    expect(func(undefined)).to.equal(false);
    expect(func(null)).to.equal(false);
  });

});
