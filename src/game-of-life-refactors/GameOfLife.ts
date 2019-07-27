import Position from './Position';
import Cell from './Cell';
import Board from './Board';

class GameOfLife {

  private board: Board;

  constructor(seed: Array<Array<number>>) {
    this.board = new Board();

    seed.forEach(([row, column]) => {
      const cell = new Cell('live', new Position(row, column));
      this.board.add(cell);
    });
  }

  nextGeneration() {
    this.board.expandDeadCellsFromLiveCells();
    this.board.filter(this.isAliveInNextGeneration.bind(this));
  }

  private isAliveInNextGeneration(cell: Cell): boolean {    
    const numberOfLiveNeighbors = this.board.countLiveNeighbors(cell.position());
    if (cell.isAlive() && (numberOfLiveNeighbors < 2 || numberOfLiveNeighbors > 3)) {
      return false;
    }
    if (cell.isAlive() && (numberOfLiveNeighbors === 2 || numberOfLiveNeighbors === 3)) {
      return true;
    }
    if (!cell.isAlive() && numberOfLiveNeighbors === 3) {
      return true;
    }
    return false;
  }

  currentGeneration(): Array<Array<number>> {
    return this.board.toArray();
  }
}

export default GameOfLife;
