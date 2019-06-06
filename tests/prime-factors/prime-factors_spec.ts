import should from 'should';
import primeFactors from '../../src/prime-factors/prime-factors';

describe('Prime Factors', () => {
  it('foo', () => {
    primeFactors(2).should.be.eql([2]);
    primeFactors(3).should.be.eql([3]);
    primeFactors(4).should.be.eql([2, 2]);
  });
});
