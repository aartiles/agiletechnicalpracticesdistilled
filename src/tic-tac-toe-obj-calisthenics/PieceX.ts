import Piece from "./Piece";
import PieceO from "./PieceO";

export default class PieceX extends Piece {
  nextPiece(): Piece {
    return new PieceO();
  }
}