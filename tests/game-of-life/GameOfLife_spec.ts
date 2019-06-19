import should from 'should';
import GameOfLife from '../../src/game-of-life/GameOfLife';
import DeadCell from '../../src/game-of-life/DeadCell';
import LiveCell from '../../src/game-of-life/LiveCell';
import Position from '../../src/game-of-life/Position';
import Board from '../../src/game-of-life/Board';

describe.only('Game of life', () => {
  it('Empty game continues empty', () => {
    const seed = new Board([]);
    const game = new GameOfLife(seed);
    game.tick();
    game.board().equals(new Board([])).should.be.ok();
  });

  it('Live cell with no neihgbors dies', () => {
    const seed = new Board([new LiveCell(new Position(0, 0))]);
    const game = new GameOfLife(seed);
    game.tick();
    game.board().equals(new Board([new DeadCell(new Position(0, 0))])).should.be.ok();
  });

});