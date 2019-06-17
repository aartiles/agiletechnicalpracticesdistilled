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
    if (this.places[position.row()][position.column()].equals(new NoPiece())) {
      this.places[position.row()][position.column()] = piece;
    }
    else {
      throw new PositionAlreadyPlayedError();
    }
  }
}