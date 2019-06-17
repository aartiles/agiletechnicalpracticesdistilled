import Piece from "./Piece";
import Position from "./Position";
import NotYourTurnError from "./NotYourTurnError";
import PieceX from "./PieceX";
import Board from "./Board";

export default class TicTacToe {
  private nextPiece: Piece;
  private board: Board;

  constructor() {
    this.nextPiece = new PieceX();
    this.board = new Board();
  }

  play(piece: Piece, position: Position) {
    if (!piece.equals(this.nextPiece)) throw new NotYourTurnError();
    this.board.place(piece, position);
    this.setNextPiece(piece.nextPiece());
  }

  pieceAt(position: Position): Piece {
    return new PieceX();
  }

  private setNextPiece(piece: Piece) {
    this.nextPiece = piece;
  }

}