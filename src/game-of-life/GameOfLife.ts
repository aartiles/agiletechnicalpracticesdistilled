import Board from "./Board";
import Cell from "./Cell";

export default class GameOfLife {
  private board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  tick() {
    this.board = this.board.trasnform(this.applyRules);
  }
  
  parternMatch(board: Board) {
    return this.board.equals(board);
  }

  private applyRules(cell: Cell, liveNeighbors: number): Cell {
    if (cell.isALive() && liveNeighbors < 2) {
      return Cell.Dead();
    }
    else if (cell.isALive() && (liveNeighbors === 2 || liveNeighbors === 3)) {
      return Cell.Live();
    }
    else if (cell.isALive() && liveNeighbors > 3) {
      return Cell.Dead();
    }
    else if (cell.isDead() && liveNeighbors === 3) {
      return Cell.Live();
    }
    else return cell;
  }
  
}