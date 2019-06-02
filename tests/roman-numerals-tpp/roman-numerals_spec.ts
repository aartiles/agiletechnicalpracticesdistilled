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

  it('roman of 4 is IV', () => {
    romanNumeral(4).should.be.eql('IV');
  });

  it('roman of 5 is V', () => {
    romanNumeral(5).should.be.eql('V');
  });

  it('roman of 6 is VI', () => {
    romanNumeral(6).should.be.eql('VI');
  });

  it('roman of 7 is VII', () => {
    romanNumeral(7).should.be.eql('VII');
  });

  it('roman of 8 is VIII', () => {
    romanNumeral(8).should.be.eql('VIII');
  });

});