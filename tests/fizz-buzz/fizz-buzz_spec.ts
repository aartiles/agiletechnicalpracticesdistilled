import should from 'should';
import fizzbuzz from '../../src/fizz-buzz/fizz-buzz';

describe('Fizz Buzz', () => {
  it('fizzbuzz of 1 should be "1"', () => {
    should(fizzbuzz(1)).be.eql('1');
  });

  it('fizzbuzz of 2 should be "2"', () => {
    should(fizzbuzz(2)).be.eql('2');
  });

  it('fizzbuzz of 4 should be "4"', () => {
    should(fizzbuzz(4)).be.eql('4');
  });

  it('fizzbuzz of 3 should be "Fizz"', () => {
    should(fizzbuzz(4)).be.eql('Fizz');
  });

});
