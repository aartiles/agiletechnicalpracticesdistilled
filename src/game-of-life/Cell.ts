import Position from "./Position";

export default abstract class Cell {
  protected position: Position;
  protected type: string;

  constructor(position: Position) {
    this.position = position;
  }

  equals(cell: Cell): boolean {
    return this.position.equals(cell.position) && this.type === cell.type;
  }
}