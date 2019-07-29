import Cell from "./Cell";
import DeadCell from "./DeadCell";
import Position from "./Position";

export default class Board {
  private cells: Array<Cell>;

  constructor() {
    this.cells = [];
  }

  add(cell: Cell) {
    if (this.existsCell(cell.position())) return;
    this.cells.push(cell);
  }

  nextGeneration() {
    this.expandDeadCellsFromLiveCells();
    this.cells = this.cells.reduce((newGeneration, cell) => {
      const numberOfLiveNeighbors = this.countLiveNeighbors(cell.position());
      newGeneration.push(cell.nextGeneration(numberOfLiveNeighbors));
      return newGeneration;
    }, []);
  }

  toArray(): Array<Array<number>> {
    return this.cells.reduce((liveCells, cell) => {
      if (cell.isAlive()) liveCells.push(cell.position().toArray());
      return liveCells;
    }, []);
  }

  private countLiveNeighbors(position: Position): number {
    return this.cells.reduce((liveNeighbors, liveCell) => {
      if (liveCell.isAlive() && liveCell.isNeighbor(position)) liveNeighbors++;
      return liveNeighbors;
    }, 0);
  }

  private expandDeadCellsFromLiveCells() {
    this.cells.forEach(cell => this.addDeadNeighbors(cell));
  }

  private addDeadNeighbors(cell: Cell) {
    const neighbors = cell.getNeighborsPosition();
    neighbors.forEach(neighbor => this.add(new DeadCell(neighbor)));
  }

  private existsCell(position: Position): boolean {
    return this.cells.some(cell => {
      return cell.position().isEqual(position);
    });
  }

}