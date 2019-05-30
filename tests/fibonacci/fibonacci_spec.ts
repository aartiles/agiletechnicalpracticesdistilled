import should from 'should';
import fibonacci from '../../src/fibonacci/fibonacci';

describe('Fibonacci', () => {
  it('foo', () => {
    fibonacci(1).should.be.eql(0); 
  });
});