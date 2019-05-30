import should from 'should';
import fibonacci from '../../src/fibonacci/fibonacci';

describe('Fibonacci', () => {
  it('should return 0 for the 1st', () => {
    fibonacci(1).should.be.eql(0); 
  });

  it('should return 1 for the 2nd', () => {
    fibonacci(2).should.be.eql(1); 
  });

  it('should return 1 for the 3rd', () => {
    fibonacci(3).should.be.eql(1); 
  });

  it('should get any position correctly', () => {
    fibonacci(4).should.be.eql(2);
    fibonacci(5).should.be.eql(3);
    fibonacci(6).should.be.eql(5);
    fibonacci(7).should.be.eql(8);
    fibonacci(8).should.be.eql(13);
    fibonacci(9).should.be.eql(21);
    fibonacci(10).should.be.eql(34);
  });

});