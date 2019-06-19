export default class Position {
  private _row: number;
  private _column: number;

  constructor(row: number, column: number) {
    this.setRow(row);
    this.setColumn(column);
  }

  row(): number {
    return this._row;
  }

  column(): number {
    return this._column;
  }

  private setRow(row: number) {
    this._row = row;
  }

  private setColumn(column: number) {
    this._column = column;
  }

  equals(position: Position): boolean {
    return position._row === this._row && position._column === this._column;
  }

}