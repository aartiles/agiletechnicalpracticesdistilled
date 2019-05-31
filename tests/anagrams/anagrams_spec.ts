import should from 'should';
import anagrams from '../../src/anagrams/anagrams';

describe('Anagrams', () => {
  it('anagram of a single letter is the same letter', () => {
    anagrams('a').should.be.eql('a');
  });
});