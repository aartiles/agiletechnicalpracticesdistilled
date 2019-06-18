import Piece from "./Piece";
import PieceO from "./PieceO";

export default class PieceX extends Piece {
  constructor() {
    super();
    this._name = 'X';
  }

  nextPiece(): Piece {
    return new PieceO();
  }

  canBeReplaced(): boolean {
    return false;
  }
}