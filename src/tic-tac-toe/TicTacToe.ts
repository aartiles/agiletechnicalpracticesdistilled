export default class TicTacToe {
  private nextPlayer: string;

  constructor() {
    this.nextPlayer = 'X';
  }

  play(player: string, x: number, y: number) {
    if (player !== this.nextPlayer) throw new Error('Not your turn');
    this.nextPlayer = this.nextPlayer === 'X' ? 'O' : 'X'; 
  }

  render(): Array<Array<string>> {
    return [
      ['X', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ];
  }
}