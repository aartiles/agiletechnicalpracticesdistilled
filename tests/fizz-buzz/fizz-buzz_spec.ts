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
    should(fizzbuzz(3)).be.eql('Fizz');
  });

  it('fizzbuzz of 6 should be "Fizz"', () => {
    should(fizzbuzz(6)).be.eql('Fizz');
  });

  it('fizzbuzz of 9 should be "Fizz"', () => {
    should(fizzbuzz(9)).be.eql('Fizz');
  });

  it('fizzbuzz of 5 should be "Buzz"', () => {
    should(fizzbuzz(5)).be.eql('Buzz');
  });

  it('fizzbuzz of 10 should be "Buzz"', () => {
    should(fizzbuzz(10)).be.eql('Buzz');
  });

  it('fizzbuzz of 15 should be "FizzBuzz"', () => {
    should(fizzbuzz(15)).be.eql('FizzBuzz');
  });

  it('fizzbuzz of 30 should be "FizzBuzz"', () => {
    should(fizzbuzz(30)).be.eql('FizzBuzz');
  });

  it('fizzbuzz should not accept a number lower than 1', () => {
    should(() => {
      fizzbuzz(0);
    }).throw('n should be bigger than 0');
  });

  it('fizzbuzz should not accept a number bigger than 100', () => {
    should(() => {
      fizzbuzz(100);
    }).throw('n should be lower or equal to 100');
  });

});
