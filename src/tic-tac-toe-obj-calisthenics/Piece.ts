export default abstract class Piece {
  abstract nextPiece(): Piece
  abstract canBeReplaced(): boolean

  equals(piece: Piece) : boolean {
    return piece.constructor.name === this.constructor.name;
  }
}