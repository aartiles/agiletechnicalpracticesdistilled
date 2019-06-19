import Cell from "./Cell";

export default class Board {
  private cells: Array<Cell>;

  constructor(cells: Array<Cell>) {
    this.cells = cells;
  }

  equals(board: Board): boolean {
    return board.cells.reduce((res, cell) => res && this.exists(cell), true);
  }

  private exists(cell: Cell): boolean {
    return this.cells.some(existingCell => existingCell.equals(cell));
  }
}