import should from 'should';
import Board from '../../src/game-of-life/Board';
import LiveCell from '../../src/game-of-life/LiveCell';
import Position from '../../src/game-of-life/Position';
import DeadCell from '../../src/game-of-life/DeadCell';

describe.only('Game of life: Board', () => {
  it('empty boards are equal', () => {
    const board1 = new Board([]);
    const board2 = new Board([]);
    board1.equals(board2).should.be.ok();
  });

  it('boards with the same single cell are equal', () => {
    const board1 = new Board([new LiveCell(new Position(0, 0))]);
    const board2 = new Board([new LiveCell(new Position(0, 0))]);
    board1.equals(board2).should.be.ok();
  });

  it('boards with the same more than one cell are equal', () => {
    const board1 = new Board([new LiveCell(new Position(0, 0)), new LiveCell(new Position(0, 1))]);
    const board2 = new Board([new LiveCell(new Position(0, 0)), new LiveCell(new Position(0, 1))]);
    board1.equals(board2).should.be.ok();
  });

  it('boards with the same cells in different order are equal', () => {
    const board1 = new Board([new LiveCell(new Position(0, 0)), new DeadCell(new Position(0, 1))]);
    const board2 = new Board([new DeadCell(new Position(0, 1)), new LiveCell(new Position(0, 0))]);
    board1.equals(board2).should.be.ok();
  });

});