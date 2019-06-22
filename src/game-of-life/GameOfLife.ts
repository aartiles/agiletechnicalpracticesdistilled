import Board from "./Board";
import Cell from "./Cell";

export default class GameOfLife {
  private board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  tick() {
    this.board = this.board.trasnform();
  }
  
  parternMatch(board: Board) {
    return this.board.equals(board);
  }
  
}