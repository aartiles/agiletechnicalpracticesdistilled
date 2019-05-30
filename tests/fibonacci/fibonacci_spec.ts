import should from 'should';
import fibonacci from '../../src/fibonacci/fibonacci';

describe('Fibonacci', () => {
  it('should return 0 for the 1st', () => {
    fibonacci(1).should.be.eql(0); 
  });

  it('should return 1 for the 2nd', () => {
    fibonacci(2).should.be.eql(1); 
  });

});