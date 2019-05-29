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
});
