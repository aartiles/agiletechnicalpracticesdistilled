import should from 'should';
import leapYear from '../../src/leap-year/leap-year';

describe('Leap Year', () => {
  it('detect typical leap years', () => {
    leapYear(1996).should.be.true();
    leapYear(1992).should.be.true();
  });

  it('detect typical common years', () => {
    leapYear(2001).should.be.false();
  });

  it('detect atypical common years', () => {
    leapYear(1900).should.be.false();
  });

  it('detect atypical leap years', () => {
    leapYear(2000).should.be.true();
  });
});
