import { expect } from 'chai';
import func from '../solutions/chapter1_ArraysAndStrings/1.3_URLify.js';


describe('method to replace spaces in a string with "%20":\n', () => {

  it('should return correct string', () => {
    expect(func('Hello World')).to.equal('Hello%20World');
    expect(func('Hello  great   developer  ')).to.equal('Hello%20great%20developer');
    expect(func('Hi')).to.equal('Hi');
  });

});
