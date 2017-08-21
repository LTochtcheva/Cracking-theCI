import { expect } from 'chai';
import func from '../../solutions/chapter1_ArraysAndStrings/1.7_rotateMatrix.js';

describe('method that rotates matrix by 90 degrees:\n', () => {
  it('should rotate matrix correctly', () => {
      let inOut = [
        {
          matrix:  [[1,2,3],
                    [4,5,6],
                    [7,8,9]],
          result:  [[7,4,1],
                    [8,5,2],
                    [9,6,3]],
        },
        {
          matrix:  [[1,2,0],
                    [5,6,7],
                    [9,0,2]],
          result:  [[9,5,1],
                    [0,6,2],
                    [2,7,0]]
        },
        {
          matrix:  [[3,4],
                    [5,6]],
          result:  [[5,3],
                    [6,4]]
        }
      ]

      inOut.forEach((pair) => {
        expect(func(pair.matrix)).to.eql(pair.result);
      });
    });
});
