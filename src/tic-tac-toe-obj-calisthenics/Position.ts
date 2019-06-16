export default class Position {
  private _row: number;
  private _column: number;

  constructor(row: number, column: number) {
    this.setRow(row);
    this.setColumn(column);
  }

  private setRow(row: number) {
    this._row = row;
  }

  private setColumn(column: number) {
    this._column = column;
  }

}