import should from 'should';
import romanNumeral from '../../src/roman-numerals-tpp/roman-numerals';

describe('Roman Numerals', () => {
  it('roman of 1 is I', () => {
    romanNumeral(1).should.be.eql('I');
  });

  it('roman of 2 is II', () => {
    romanNumeral(2).should.be.eql('II');
  });

  it('roman of 3 is III', () => {
    romanNumeral(3).should.be.eql('III');
  });

});