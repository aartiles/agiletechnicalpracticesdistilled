export default class TicTacToe {
  private nextPlayer: string;
  private board: Array<Array<string>>;

  constructor() {
    this.nextPlayer = 'X';
    this.board = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ];
  }

  play(player: string, x: number, y: number) {
    if (player !== this.nextPlayer) throw new Error('Not your turn');
    if (this.board[x - 1][y - 1] !== '-') throw new Error('Position already played');
    this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X'; 
    this.board[x - 1][y - 1] = player;
  }

  render(): Array<Array<string>> {
    return this.board;
  }
}