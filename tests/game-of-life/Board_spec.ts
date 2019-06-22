import should from 'should';
import Board from '../../src/game-of-life/Board';
import Cell from '../../src/game-of-life/Cell';

describe('Game of life: board', () => {
  it('empty boards are equal', () => {
    const board1 = new Board([]);
    const board2 = new Board([]);
    console.log('board1.equals(board2)', board1.equals(board2))
    should(board1.equals(board2)).be.ok();
  });

  it('boards with the same single cell are equal', () => {
    const board1 = new Board([[Cell.Dead()]]);
    const board2 = new Board([[Cell.Dead()]]);
    board1.equals(board2).should.be.ok();
  });

  it('boards with the same more than one cell are equal', () => {
    const board1 = new Board([
      [Cell.Live(), Cell.Dead()],
      [Cell.Dead(), Cell.Live()]
    ]);
    const board2 = new Board([
      [Cell.Live(), Cell.Dead()],
      [Cell.Dead(), Cell.Live()]
    ]);
    board1.equals(board2).should.be.ok();
  });
});