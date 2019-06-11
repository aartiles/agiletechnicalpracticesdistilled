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

  it('Players alternate placing X and O on the board', () => {
    const game = new TicTacToe();
    game.play('X', 1, 1);
    should(() => {
      game.play('X', 1, 2);
    }).throw('Not your turn');
  });

  it('Players can not play at a played position', () => {
    const game = new TicTacToe();
    game.play('X', 1, 1);
    should(() => {
      game.play('O', 1, 1);
    }).throw('Position already played');
  });

  it('Players with 3 positions played in a row wins', () => {
    const game = new TicTacToe();
    game.play('X', 1, 1);
    game.winner().should.be.eql('-');
    game.play('O', 1, 2);
    game.winner().should.be.eql('-');
    game.play('X', 2, 1);
    game.winner().should.be.eql('-');
    game.play('O', 2, 2);
    game.winner().should.be.eql('-');
    game.play('X', 3, 1);
    game.winner().should.be.eql('X');
  });

  it('If all position are filled but there are no winners then the game is draw', () => {
    const game = new TicTacToe();
    game.play('X', 0, 0);
    game.play('O', 0, 2);
    game.play('X', 0, 1);
    game.play('O', 1, 1);
    game.play('X', 1, 0);
    game.play('O', 1, 2);
    game.play('X', 2, 1);
    game.play('O', 0, 2);
    game.play('X', 2, 2);
    game.result().should.be.eql('draw');
  });

});