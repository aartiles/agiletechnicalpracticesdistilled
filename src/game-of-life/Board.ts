import Cell from "./Cell";

type RulesFn = (cell: Cell, liveNeighbors: number) => Cell;

const NEIGHBOR_RELATIVE_POSITIONS = [
  { row: -1, column: 0 },
  { row: -1, column: 1 },
  { row: 0, column: 1 },
  { row: 1, column: 1 },
  { row: 1, column: 0 },
  { row: 1, column: -1 },
  { row: 0, column: -1 },
  { row: -1, column: -1 }
];

export default class Board {
  private cells: Array<Array<Cell>>;

  constructor(seed: Array<Array<Cell>>) {
    this.cells = seed;
  }

  liveNeighborsOfCellAt(row: number, column: number): number {
    return NEIGHBOR_RELATIVE_POSITIONS.reduce((liveNeighbors, relativePosition) => {
      const cell = this.cellAt(row + relativePosition.row, column + relativePosition.column);
      return liveNeighbors + (!cell || cell.isDead() ? 0 : 1);
    }, 0);
  }

  equals(board: Board) {
    for (let row = 0; row < this.cells.length; row++) {
      for (let column = 0; column < this.cells[row].length; column++) {
        if (!this.cellAt(row, column).equals(board.cellAt(row, column))) return false;
      }
    }
    return true;
  }

  trasnform(rulesFn: RulesFn): Board {
    return new Board(this.cells.map((rowCells, row) => {
      return rowCells.map((cell, column) => {
        return rulesFn(cell, this.liveNeighborsOfCellAt(row, column));
      });
    })); 
  }

  private cellAt(row: number, column: number): Cell {
    if (this.isInvalidPosition(row, column)) return null;
    return this.cells[row][column];
  }

  private isInvalidPosition(row: number, column: number) {
    return row < 0 || column < 0 || row >= this.cells.length || column >= this.cells[row].length;
  }
}