import { expect } from 'chai';
import func from '../solutions/chapter1_ArraysAndStrings/1.8_zeroMatrix.js';

describe('method that given matrix with element 0 sets its row and column to 0:\n', () => {

  it('should handle single 0-element', () => {
    let singleInOut = [
      {
        matrix: [[0]],
        result: [[0]]
      },
      {
        matrix:  [[1,1],
                 [1,0]],
        result:  [[1,0],
                 [0,0]]
      },
      {
        matrix:  [[1,2,3,4],
                  [5,6,7,8],
                  [9,0,2,3]],
        result:  [[1,0,3,4],
                  [5,0,7,8],
                  [0,0,0,0]]
      }
    ]

    singleInOut.forEach((pair) => {
      expect(func(pair.matrix)).to.eql(pair.result);
    });
  });


    it('should handle multiple 0-elements', () => {
      let multiInOut = [
        {
          matrix:  [[1,2,3],
                    [4,0,6],
                    [0,8,9]],
          result:  [[0,0,3],
                    [0,0,0],
                    [0,0,0]],
        },
        {
          matrix:  [[1,2,0,4],
                    [5,6,7,8],
                    [9,0,2,3]],
          result:  [[0,0,0,0],
                    [5,0,0,8],
                    [0,0,0,0]]
        },
        {
          matrix:  [[1,2,0,4],
                    [5,6,7,8],
                    [9,0,2,0]],
          result:  [[0,0,0,0],
                    [5,0,0,0],
                    [0,0,0,0]]
        }
      ]

      multiInOut.forEach((pair) => {
        expect(func(pair.matrix)).to.eql(pair.result);
      });
    });

    it('should return original matrix if there are no 0-elements', () => {
      let noZeroInOut = [
        {
          matrix:  [[1,2,3],
                    [4,5,6],
                    [7,8,9]],
          result:  [[1,2,3],
                    [4,5,6],
                    [7,8,9]],
        },
        {
          matrix:  [[1,2,3,4],
                    [5,6,7,8],
                    [9,1,2,3]],
          result:  [[1,2,3,4],
                    [5,6,7,8],
                    [9,1,2,3]]
        }
      ]

      noZeroInOut.forEach((pair) => {
        expect(func(pair.matrix)).to.eql(pair.result);
      });
    });
});



