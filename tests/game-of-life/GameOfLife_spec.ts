import should from 'should';
import GameOfLife from '../../src/game-of-life/GameOfLife';

describe.only('Game of life', () => {
  it('Empty game continues empty', () => {
    const game = new GameOfLife([]);
    game.tick().should.be.eql([]);
  });
});