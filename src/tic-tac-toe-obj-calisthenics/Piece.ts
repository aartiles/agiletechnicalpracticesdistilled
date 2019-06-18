export default abstract class Piece {
  protected _name: string;

  abstract nextPiece(): Piece
  abstract canBeReplaced(): boolean

  equals(piece: Piece) : boolean {
    return piece.constructor.name === this.constructor.name;
  }

  name() {
    return this._name;
  }
}