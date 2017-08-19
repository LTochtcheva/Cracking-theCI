import { expect } from 'chai';
import func from '../solutions/chapter1_ArraysAndStrings/1.3_URLify.js';


describe(':\n', () => {

  it('should', () => {
    expect(func('Hello World')).to.equal('Hello%20World');
    expect(func('Hello  great   developer  ')).to.equal('Hello%20great%20developer');
    expect(func('Hi')).to.equal('Hi');
  });

});
