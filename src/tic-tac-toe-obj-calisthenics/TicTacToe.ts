import Piece from "./Piece";
import Position from "./Position";
import NotYourTurnError from "./NotYourTurnError";

export default class TicTacToe {
  play(piece: Piece, position: Position) {
    if (piece.equals(new Piece('O'))) throw new NotYourTurnError();
  }

  pieceAt(position: Position): Piece {
    return new Piece('X');
  }
}