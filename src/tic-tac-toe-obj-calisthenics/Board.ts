import Piece from "./Piece";
import NoPiece from "./NoPiece";
import Position from "./Position";
import PositionAlreadyPlayedError from "./PositionAlreadyPlayedError";

export default class Board {
  private places: Array<Array<Piece>>;

  constructor() {
    this.places = Array(3).fill(Array(3).fill(new NoPiece()));
  }

  place(piece: Piece, position: Position) {
    if (!this.pieceAt(position).canBeReplaced()) throw new PositionAlreadyPlayedError();
    this.places[position.row()][position.column()] = piece;
  }

  private pieceAt(position: Position): Piece {
    return this.places[position.row()][position.column()];
  }
}