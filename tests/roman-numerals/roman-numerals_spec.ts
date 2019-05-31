import should from 'should';
import romanNumeral from '../../src/roman-numerals/roman-numerals';

describe('Roman Numerals', () => {
  it('roman of 1 is I', () => {
    romanNumeral(1).should.be.eql('I');
  });
});