import Piece from "./Piece";
import NoPiece from "./NoPiece";
import Position from "./Position";
import PositionAlreadyPlayedError from "./PositionAlreadyPlayedError";

const ROWS = 3;
const COLUMNS = 3;

export default class Board {
  private places: Array<Array<Piece>>;

  constructor() {
    this.clear();
  }

  place(piece: Piece, position: Position) {
    if (!this.pieceAt(position).canBeReplaced()) throw new PositionAlreadyPlayedError();
    this.places[position.row()][position.column()] = piece;
  }

  private pieceAt(position: Position): Piece {
    return this.places[position.row()][position.column()];
  }

  private clear() {
    this.places = Array(ROWS);
    for(let row = 0; row < ROWS; row++) {
      this.places[row] = Array(COLUMNS);
      for(let column = 0; column < COLUMNS; column++) {
        this.places[row][column] = new NoPiece();
      }
    }
  }
}