import should from 'should';
import TicTacToe from '../../src/tic-tac-toe-obj-calisthenics/TicTacToe';
import Player from '../../src/tic-tac-toe-obj-calisthenics/Player';
import Position from '../../src/tic-tac-toe-obj-calisthenics/Position';
import NotYourTurnError from '../../src/tic-tac-toe-obj-calisthenics/NotYourTurnError';

describe.only('Tic Tac Toe Game', () => {
  it('X always play first', () => {
    const game = new TicTacToe();
    const playerO = new Player('O');
    const position = new Position(1, 1);
    should(() => {
      game.play(playerO, position);
    }).throw(NotYourTurnError);
  });
});