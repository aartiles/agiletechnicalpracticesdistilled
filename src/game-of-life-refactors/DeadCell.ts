import Position from './Position';
import Cell from './Cell';

class DeadCell extends Cell {

  constructor(position: Position) {
    super(position);
  }

  isAlive(): boolean {
    return false;
  }
}

export default DeadCell;
