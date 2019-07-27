import Position from './Position';
abstract class Cell {
  protected _position: Position;

  constructor(position: Position) {
    this._position = position;
  }

  position(): Position {
    return this._position;
  }

  isNeighbor(position: Position) {
    return this._position.isNeighbor(position);
  }

  getNeighborsPosition(): Array<Position> {
    return this._position.getNeighbors();
  }

  abstract isAlive(): boolean;
}

export default Cell;
