import Position from './Position';
import Cell from './Cell';
import LiveCell from './LiveCell';

class DeadCell extends Cell {

  constructor(position: Position) {
    super(position);
  }

  isAlive(): boolean {
    return false;
  }

  nextGeneration(numberOfLiveNeighbors: number): Cell {
    if (numberOfLiveNeighbors === 3) {
      return new LiveCell(this._position);
    }
    else {
      return new DeadCell(this._position);
    }
  }

}

export default DeadCell;
