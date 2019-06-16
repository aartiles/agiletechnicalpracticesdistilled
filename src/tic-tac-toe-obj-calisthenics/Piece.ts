export default class Piece {
  private name: string; 

  constructor(name: string) {
    this.setPiece(name);
  }

  private setPiece(piece: string) {
    this.name = piece;
  }

  equals(piece: Piece) {
    return piece.name === this.name;
  }

  nextPiece(): Piece {
    return this.name === 'O' ? new Piece('X') : new Piece('O');
  }
}