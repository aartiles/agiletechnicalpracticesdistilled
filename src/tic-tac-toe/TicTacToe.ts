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

  winner(): string {
    if (this.board[0][0] === this.board[0][1] && this.board[0][1] === this.board[0][2]) return this.board[0][0];
    if (this.board[1][0] === this.board[1][1] && this.board[1][1] === this.board[0][2]) return this.board[1][0];
    if (this.board[2][0] === this.board[2][1] && this.board[2][1] === this.board[0][2]) return this.board[2][0];
    if (this.board[0][0] === this.board[1][0] && this.board[1][0] === this.board[2][0]) return this.board[0][0];
    if (this.board[0][1] === this.board[1][1] && this.board[1][1] === this.board[2][1]) return this.board[0][1];
    if (this.board[0][2] === this.board[1][2] && this.board[1][2] === this.board[2][2]) return this.board[0][2];
    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) return this.board[0][0];
    if (this.board[2][0] === this.board[1][1] && this.board[1][1] === this.board[0][2]) return this.board[2][0];
    return '-';
  }
}