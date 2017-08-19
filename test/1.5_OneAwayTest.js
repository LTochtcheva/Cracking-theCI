import { expect } from 'chai';
import func from '../solutions/chapter1_ArraysAndStrings/1.5_OneAway.js';

describe('method to check if two strings are one edit away:\n', () => {

  it('should return true if strings are one or zero edits away', () => {
    expect(func('cat', 'cats')).to.equal(true);
    expect(func('cat', 'cat')).to.equal(true);
    expect(func('asdfghjkl12345', 'asdfghkl12345')).to.equal(true);
    expect(func('qwerty', 'Zwerty')).to.equal(true);
    expect(func('', 'a')).to.equal(true);
  });

  it('should return false if strings are more than one edit away', () => {
    expect(func('Hello World', 'Hello World!!!')).to.equal(false);
    expect(func('Hi', 'Buy')).to.equal(false);
    expect(func('Labrador', 'Lab')).to.equal(false);
  });

});
