import Board from "./Board";

export default class GameOfLife {
  private _board: Board;

  constructor(seed: Board) {
    this._board = seed;
  }

  tick() {
  }

  board() {
    return this._board;
  }
}