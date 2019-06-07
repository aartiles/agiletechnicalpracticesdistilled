import should from 'should';
import TicTacToe from '../../src/tic-tac-toe/TicTacToe';

describe.only('Tic Tac Toe Game', () => {
  it('X always play first', () => {
    const game = new TicTacToe();
    should(() => {
      game.play('O', 1, 1);
    }).throw('Not your turn');
  });

  it('Place X correctly at 1,1', () => {
    const game = new TicTacToe();
    game.play('X', 1, 1);
    game.render().should.be.eql([
      ['X', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
  });

});