import should from 'should';
import TicTacToe from '../../src/tic-tac-toe-obj-calisthenics/TicTacToe';
import Piece from '../../src/tic-tac-toe-obj-calisthenics/Piece';
import Position from '../../src/tic-tac-toe-obj-calisthenics/Position';
import NotYourTurnError from '../../src/tic-tac-toe-obj-calisthenics/NotYourTurnError';

describe.only('Tic Tac Toe Game', () => {
  it('X always play first', () => {
    const game = new TicTacToe();
    const pieceO = new Piece('O');
    const position = new Position(1, 1);
    should(() => {
      game.play(pieceO, position);
    }).throw(NotYourTurnError);
  });

  it('Place X correctly at 1,1', () => {
    const game = new TicTacToe();
    const pieceX = new Piece('X');
    const position = new Position(1, 1);
    game.play(pieceX, position);
    game.pieceAt(position).equals(pieceX).should.be.ok();
  });

});