import Cell from "./Cell";

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
    return this.cells.reduce((equalRows, rowCells, row) => {
      return rowCells.reduce((equalCells, cell, column) => {
        return equalCells && cell.equals(board.cellAt(row, column));
      }, equalRows);
    }, true);    
  }

  trasnform(): Board {
    const cells = this.cells.map((rowCells, row) => {
      return rowCells.map((cell, column) => {
        return cell.transform(this.liveNeighborsOfCellAt(row, column));
      });
    });
    return new Board(cells); 
  }

  private cellAt(row: number, column: number): Cell {
    if (this.isInvalidPosition(row, column)) return null;
    return this.cells[row][column];
  }

  private isInvalidPosition(row: number, column: number) {
    return row < 0 || column < 0 || row >= this.cells.length || column >= this.cells[row].length;
  }
}