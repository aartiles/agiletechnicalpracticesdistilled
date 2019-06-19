import Cell from "./Cell";
import Position from "./Position";

export default class LiveCell extends Cell {
  constructor(position: Position) {
    super(position);
    this.type = 'live';
  }
}