export default class TicTacToe {
  play(player: string, x: number, y: number) {
    if (player === 'O') throw new Error('Not your turn');
  }

  render(): Array<Array<string>> {
    return [
      ['X', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ];
  }
}