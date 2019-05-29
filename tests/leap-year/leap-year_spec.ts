import should from 'should';
import leapYear from '../../src/leap-year/leap-year';

describe('Leap Year', () => {
  it('detect typical leap years', () => {
    leapYear(1966).should.be.true();
  });
});
