import Piece from "./Piece";

export default class NoPiece extends Piece {
  constructor() {
    super();
    this._name = 'None';
  }

  nextPiece(): Piece {
    return this;
  }

  canBeReplaced(): boolean {
    return true;
  }
}