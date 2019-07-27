import Position from './Position';
import Cell from './Cell';

class LiveCell extends Cell {

  constructor(position: Position) {
    super(position);
  }

  isAlive(): boolean {
    return true;
  }
}

export default LiveCell;
