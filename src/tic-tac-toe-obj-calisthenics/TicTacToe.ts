import Piece from "./Piece";
import Position from "./Position";
import NotYourTurnError from "./NotYourTurnError";
import PieceX from "./PieceX";
import Board from "./Board";
import NoPiece from "./NoPiece";
import GameResult from "./GameResult";

const WINNER_COMBINATIONS: Array<Array<Position>> = [
  [new Position(1, 1), new Position(1, 2), new Position(0, 2)],
  [new Position(1, 1), new Position(2, 2), new Position(2, 3)],
  [new Position(3, 1), new Position(3, 2), new Position(3, 3)],
  [new Position(1, 1), new Position(2, 1), new Position(3, 1)],
  [new Position(1, 2), new Position(2, 2), new Position(3, 2)],
  [new Position(1, 3), new Position(2, 3), new Position(3, 3)],
  [new Position(1, 1), new Position(2, 2), new Position(3, 3)],
  [new Position(1, 3), new Position(2, 2), new Position(3, 1)]
];

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
    return this.board.pieceAt(position);
  }

  result(): GameResult {
    if (this.board.isFull()) return new GameResult('draw');
    const winnerPiece = this.winnerPiece();
    return new GameResult(winnerPiece.name());
  }

  private winnerPiece(): Piece {
    for (let combination of WINNER_COMBINATIONS) {
      const winnerPiece = this.allInARowPiece(combination);
      if (!winnerPiece.canBeReplaced()) return winnerPiece;
    }
    return new NoPiece();
  }

  private allInARowPiece(combination: Array<Position>): Piece {
    let winner = null;
    for (let pos of combination) {
      const piece = this.board.pieceAt(pos);
      if (winner !== null && !piece.equals(winner)) {
        return new NoPiece();
      }
      winner = piece;
    }
    return winner;
  }

  private setNextPiece(piece: Piece) {
    this.nextPiece = piece;
  }

}