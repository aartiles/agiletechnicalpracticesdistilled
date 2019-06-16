export default class Piece {
  private name: string; 

  constructor(name: string) {
    this.setPiece(name);
  }

  setPiece(piece: string) {
    this.name = piece;
  }

  equals(piece: Piece) {
    return piece.name === this.name;
  }
}