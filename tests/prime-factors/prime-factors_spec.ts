import should from 'should';
import primeFactors from '../../src/prime-factors/prime-factors';

describe('Prime Factors', () => {
  it('computes prime factors correctly', () => {
    primeFactors(0).should.be.eql([]);
    primeFactors(1).should.be.eql([]);
    primeFactors(2).should.be.eql([2]);
    primeFactors(3).should.be.eql([3]);
    primeFactors(4).should.be.eql([2, 2]);
    primeFactors(6).should.be.eql([2, 3]);
    primeFactors(9).should.be.eql([3, 3]);
    primeFactors(12).should.be.eql([2, 2, 3]);
  });
});
