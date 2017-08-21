import { expect } from 'chai';
import func from '../../solutions/chapter1_ArraysAndStrings/1.6_stringCompression.js';

describe('method to compress a string with counts:\n', () => {

  it('should return correctly compressed string', () => {
    expect(func('aasdddfgggg')).to.equal('a2s1d3f1g4');
    expect(func('aaaaa')).to.equal('a5');
    expect(func('')).to.equal('');
    expect(func(null)).to.equal(null);
    expect(func(undefined)).to.equal(undefined);
  });

  it('should return original string if compressed string is not shorter', () => {
    expect(func('abcd')).to.equal('abcd');
    expect(func('aacd')).to.equal('aacd');
  });

});

