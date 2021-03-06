import Piece from "./Piece";
import PieceX from "./PieceX";

export default class PieceO extends Piece {
  constructor() {
    super();
    this._name = 'O';
  }

  nextPiece(): Piece {
    return new PieceX();
  }

  canBeReplaced(): boolean {
    return false;
  }

}