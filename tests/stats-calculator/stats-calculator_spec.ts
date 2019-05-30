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

  it('avg of an empty list is zero', () => {
    const statsCalculator = new StatsCalculator([]);
    statsCalculator.avg().should.be.eql(0);
  });

  it('avg of an empty list is zero', () => {
    const statsCalculator = new StatsCalculator([]);
    statsCalculator.avg().should.be.eql(0);
  });

  it('should compute minimum', () => {
    const statsCalculator = new StatsCalculator([6, 9, 15, -2, 92, 11]);
    statsCalculator.minimum().should.be.eql(-2);
  });


});
