import should from 'should';
import anagrams from '../../src/anagrams/anagrams';

describe('Anagrams', () => {
  it('anagram of a single character is the same character', () => {
    anagrams('a').should.be.eql(['a']);
  });

});