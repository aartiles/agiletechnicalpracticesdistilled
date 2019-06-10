
const WINNER_COMBINATIONS: Array<Array<Array<number>>> = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]]
];
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
    for (let combination of WINNER_COMBINATIONS) {
      const winner = this.allInARow(combination);
      if (winner !== null && winner !== '-') return winner;
    }
    return '-';
  }


  private allInARow(combination: Array<Array<number>>): string {
    let winner = null;
    for (let pos of combination) {
      if (winner !== null && this.board[pos[0]][pos[1]] !== winner) {
        return null;
      }
      winner = this.board[pos[0]][pos[1]];
    }
    return winner;

  } 

}