import should from 'should';
import fizzbuzz from '../../src/fizz-buzz/fizz-buzz';

describe('Fizz Buzz', () => {
  it('fizzbuzz of 1 should be "1"', () => {
    should(fizzbuzz(1)).be.eql('1');
  });

  it('fizzbuzz of 2 should be "2"', () => {
    should(fizzbuzz(2)).be.eql('2');
  });

});
