export default class Player {
  private _piece: string; 

  constructor(piece: string) {
    this.setPiece(piece);
  }

  setPiece(piece: string) {
    this._piece = piece;
  }
}