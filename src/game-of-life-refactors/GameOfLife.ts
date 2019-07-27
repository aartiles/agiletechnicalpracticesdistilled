import Position from './Position';
import Cell from './Cell';
import LiveCell from './LiveCell';
import Board from './Board';

class GameOfLife {

  private board: Board;

  constructor(seed: Array<Array<number>>) {
    this.board = new Board();

    seed.forEach(([row, column]) => {
      const cell = new LiveCell(new Position(row, column));
      this.board.add(cell);
    });
  }

  nextGeneration() {
    this.board.nextGeneration();
  }

  currentGeneration(): Array<Array<number>> {
    return this.board.toArray();
  }
}

export default GameOfLife;
