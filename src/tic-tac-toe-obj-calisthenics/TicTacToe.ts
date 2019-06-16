import Piece from "./Piece";
import Position from "./Position";
import NotYourTurnError from "./NotYourTurnError";

export default class TicTacToe {
  private nextPiece: Piece;

  constructor() {
    this.nextPiece = new Piece('X');
  }

  play(piece: Piece, position: Position) {
    if (!piece.equals(this.nextPiece)) throw new NotYourTurnError();
    this.setNextPiece(piece.nextPiece());
  }

  pieceAt(position: Position): Piece {
    return new Piece('X');
  }

  private setNextPiece(piece: Piece) {
    this.nextPiece = piece;
  }

}