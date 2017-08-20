import { expect } from 'chai';
import func from '../solutions/chapter1_ArraysAndStrings/1.9_stringRotation.js';

describe('method to check if str2 is a rotation of str1 using one call to isSubstring:\n', () => {

  it('should return true if str2 is a rotation of str1', () => {
    expect(func('asdfg', 'dfgas')).to.equal(true);
    expect(func('erbottlewat', 'waterbottle')).to.equal(true);
    expect(func('catdog', 'dogcat')).to.equal(true);
  });

  it('should return false if str2 is NOT a rotation of str1', () => {
    expect(func('abcd', 'bcad')).to.equal(false);
    expect(func('catdog', 'dogtac')).to.equal(false);
    expect(func('catdog', 'cat')).to.equal(false);
  });

});
