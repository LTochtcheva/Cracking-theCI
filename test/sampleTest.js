import { expect } from 'chai';

describe('Always passing test', () => {
  it('should know that 2 * 2 = 4', () => {
    const expectedResult = 4;

    expect(2 * 2).to.equal(expectedResult);
  });
});
