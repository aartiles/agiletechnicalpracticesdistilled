import Piece from "./Piece";

export default class NoPiece extends Piece {
  nextPiece(): Piece {
    return this;
  }

  canBeReplaced(): boolean {
    return true;
  }
}