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

  it('roman of 9 is IX', () => {
    romanNumeral(9).should.be.eql('IX');
  });

  it('roman of 10 is X', () => {
    romanNumeral(10).should.be.eql('X');
  });

  it('roman of 11 is XI', () => {
    romanNumeral(11).should.be.eql('XI');
  });

  it('roman of 14 is XIV', () => {
    romanNumeral(14).should.be.eql('XIV');
  });

  it('roman of 20 is XX', () => {
    romanNumeral(20).should.be.eql('XX');
  });

  it('roman of 30 is XXX', () => {
    romanNumeral(30).should.be.eql('XXX');
  });

  it('roman of 40 is XL', () => {
    romanNumeral(40).should.be.eql('XL');
  });

  it('roman of 50 is L', () => {
    romanNumeral(50).should.be.eql('L');
  });

  it('roman of 60 is LX', () => {
    romanNumeral(60).should.be.eql('LX');
  });

  it('roman of 70 is LXX', () => {
    romanNumeral(70).should.be.eql('LXX');
  });

  it('roman of 80 is LXXX', () => {
    romanNumeral(80).should.be.eql('LXXX');
  });

  it('roman of 90 is XC', () => {
    romanNumeral(90).should.be.eql('XC');
  });

  it('roman of 100 is C', () => {
    romanNumeral(100).should.be.eql('C');
  });

  it('roman of 200 is CC', () => {
    romanNumeral(200).should.be.eql('CC');
  });

});