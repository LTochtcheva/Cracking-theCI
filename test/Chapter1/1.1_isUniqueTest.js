import { expect } from 'chai';
import * as funcs from '../../solutions/chapter1_ArraysAndStrings/1.1_isUnique.js'

describe('check if string has all unique chars:\n', () => {

  for (let key in funcs) {

    let func = funcs[key];

    it(`should return true for empty string`, () => {
      expect(func('')).to.equal(true);
    });

    const rightStrings = [
      'abcdefg',
      'jdkWMpz02.69',
      'bASRklp-45/12M'
    ]
    rightStrings.forEach(str =>
      {
        it(`should return true for string of unique chars: "${str}"`, () => {

          expect(func(str)).to.equal(true);
        })
      }
    );

    const wrongStrings = [
      'abbcddefg',
      'jdk000WMpz02.69',
      'bASRklp-45//R/SS12M'
    ]
    wrongStrings.forEach(str =>
      {
        it(`should return false for string with duplicates: "${str}"`, () => {

          expect(func(str)).to.equal(false);
        })
      }
    );
  }
});
