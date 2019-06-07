import should from 'should';
import primeFactors from '../../src/prime-factors/prime-factors';

describe('Prime Factors', () => {
  it('computes prime factors correctly', () => {
    primeFactors(2).should.be.eql([2]);
    primeFactors(3).should.be.eql([3]);
    primeFactors(4).should.be.eql([2, 2]);
    primeFactors(5).should.be.eql([2, 3]);
  });
});
