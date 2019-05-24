import should from 'should';
import fizzbuzz from '../../src/fizz-buzz/fizz-buzz';

describe('Fizz Buzz', () => {
  it('fizzbuzz of 1 should be "1"', () => {
    should(fizzbuzz(1)).be.eql('1');
  });

});
