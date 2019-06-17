export default abstract class Piece {
  abstract nextPiece(): Piece

  equals(piece: Piece) : boolean {
    return piece.constructor.name === this.constructor.name;
  }
}