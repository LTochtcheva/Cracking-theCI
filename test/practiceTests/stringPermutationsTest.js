import { expect } from 'chai';
import getPerm from '../../solutions/practice/stringPermutations';

describe.only('string permutations function', () => {
  const testStrings = ['one', 'app','nn'];
  const results = [[ 'eon', 'eno', 'neo', 'noe', 'one', 'oen'],
                   [ 'app', 'pap', 'ppa'],
                   [ 'nn' ]
                   ];
  testStrings.forEach((str, i) => {
    it(`should return an array of all permutations of a given string ${str}`,
       () => {
        expect(getPerm(str)).to.eql(results[i]);
       });
  });

})
