import should from 'should';
import StatsCalculator from '../../src/stats-calculator/StatsCalculator';

describe('Stats Calculator', () => {
  it('minimum of an empty list is zero', () => {
    const statsCalculator = new StatsCalculator([]);
    statsCalculator.minimum().should.be.eql(0);
  });

  it('maximum of an empty list is zero', () => {
    const statsCalculator = new StatsCalculator([]);
    statsCalculator.maximum().should.be.eql(0);
  });

  it('number of elements of an empty list is zero', () => {
    const statsCalculator = new StatsCalculator([]);
    statsCalculator.size().should.be.eql(0);
  });

});
