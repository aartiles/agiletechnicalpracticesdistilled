import should from 'should';
import anagrams from '../../src/anagrams/anagrams';

describe('Anagrams', () => {
  it('anagram of a single character is the same character', () => {
    anagrams('a').should.be.eql(['a']);
  });

  it('anagram of a the same charactes is the same word', () => {
    anagrams('aa').should.be.eql(['aa']);
  });

  it('anagram of a a 2 characters word is the same and other with characters interchanges', () => {
    anagrams('ab').should.be.eql(['ab', 'ba']);
  });

});