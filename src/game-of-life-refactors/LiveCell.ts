import Position from './Position';
import Cell from './Cell';
import DeadCell from './DeadCell';

class LiveCell extends Cell {

  constructor(position: Position) {
    super(position);
  }

  isAlive(): boolean {
    return true;
  }

  nextGeneration(numberOfLiveNeighbors: number): Cell {
    if (numberOfLiveNeighbors < 2 || numberOfLiveNeighbors > 3) {
      return new DeadCell(this._position);
    }
    else if (numberOfLiveNeighbors === 2 || numberOfLiveNeighbors === 3) {
      return new LiveCell(this._position);
    }
    else {
      return new DeadCell(this._position);
    }
  }
}

export default LiveCell;
