import Cell from "./Cell";
import Position from "./Position";

export default class DeadCell extends Cell {
  constructor(position: Position) {
    super(position);
    this.type = 'dead';
  }
}