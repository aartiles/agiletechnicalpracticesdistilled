export default class GameOfLife {
  private seed: Array<Position>;

  constructor(seed: Array<Position>) {
    this.seed = seed;
  }

  tick(): Array<Position> {
    return [];
  }
}