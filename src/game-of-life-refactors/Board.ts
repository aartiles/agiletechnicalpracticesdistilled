import Cell from "./Cell";
import DeadCell from "./DeadCell";
import LiveCell from "./LiveCell";
import Position from "./Position";

export default class Board {
  private cells: Array<Cell>;

  constructor() {
    this.cells = [];
  }

  add(cell: Cell) {
    this.cells.push(cell);
  }

  countLiveNeighbors(position: Position): number {
    return this.cells.reduce((liveNeighbors, liveCell) => {
      if (liveCell.isAlive() && liveCell.position().isNeighbor(position)) liveNeighbors++;
      return liveNeighbors;
    }, 0);
  }

  expandDeadCellsFromLiveCells() {
    this.cells = this.cells.reduce((expandedCells, cell) => {
      const neighbors = cell.position().getNeighbors();
      const newDeadCells = neighbors.reduce((deadCells, neighbor) => {
        if (!this.existsCell(expandedCells, neighbor))
          deadCells.push(new DeadCell(neighbor));
        return deadCells;
      }, []);
      return [...expandedCells, ...newDeadCells];
    }, this.cells);
  }

  filter(filterFn: (cell: Cell) => boolean) {
    this.cells = this.cells.reduce((newGeneration, cell) => {
      if (filterFn(cell)) newGeneration.push(new LiveCell(cell.position()));
      return newGeneration;
    }, []);
  }

  toArray(): Array<Array<number>> {
    return this.cells.reduce((liveCells, cell) => {
      if (cell.isAlive()) liveCells.push(cell.position().toArray());
      return liveCells;
    }, []);
  }

  private existsCell(cells: Array<Cell>, position: Position): boolean {
    return cells.some(cell => {
      return cell.position().isEqual(position);
    });
  }

}