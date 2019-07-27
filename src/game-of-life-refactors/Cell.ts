import Position from './Position';
abstract class Cell {
  protected _position: Position;

  constructor(position: Position) {
    this._position = position;
  }

  position(): Position {
    return this._position;
  }

  abstract isAlive(): boolean;
}

export default Cell;
