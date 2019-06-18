import should from 'should';
import TicTacToe from '../../src/tic-tac-toe-obj-calisthenics/TicTacToe';
import PieceX from '../../src/tic-tac-toe-obj-calisthenics/PieceX';
import PieceO from '../../src/tic-tac-toe-obj-calisthenics/PieceO';
import Position from '../../src/tic-tac-toe-obj-calisthenics/Position';
import NotYourTurnError from '../../src/tic-tac-toe-obj-calisthenics/NotYourTurnError';
import PositionAlreadyPlayedError from '../../src/tic-tac-toe-obj-calisthenics/PositionAlreadyPlayedError';

describe.only('Tic Tac Toe Game', () => {
  it('X always play first', () => {
    const game = new TicTacToe();
    const pieceO = new PieceO();
    const position = new Position(1, 1);
    should(() => {
      game.play(pieceO, position);
    }).throw(NotYourTurnError);
  });

  it('Place X correctly at 1,1', () => {
    const game = new TicTacToe();
    const pieceX = new PieceX();
    const position = new Position(1, 1);
    game.play(pieceX, position);
    game.pieceAt(position).equals(pieceX).should.be.ok();
  });

  it('Players alternate placing X and O on the board', () => {
    const game = new TicTacToe();
    const pieceX = new PieceX();
    game.play(pieceX, new Position(1, 1));
    should(() => {
      game.play(pieceX, new Position(1, 2));
    }).throw(NotYourTurnError);
  });

  it('Players can not play at a played position', () => {
    const game = new TicTacToe();
    const pieceX = new PieceX();
    game.play(pieceX, new Position(1, 1));
    should(() => {
      const pieceO = new PieceO();
      game.play(pieceO, new Position(1, 1));
    }).throw(PositionAlreadyPlayedError);
  });

  it('Players with 3 positions played in a row wins', () => {
    const game = new TicTacToe();
    game.play(new PieceX(), new Position(1, 1));
    game.play(new PieceO(), new Position(1, 2));
    game.play(new PieceX(), new Position(2, 1));
    game.play(new PieceO(), new Position(2, 2));
    game.play(new PieceX(), new Position(3, 1));
    game.result().should.be.eql('X');
  });

  it('If all position are filled but there are no winners then the game is draw', () => {
    const game = new TicTacToe();
    game.play(new PieceX(), new Position(1, 1));
    game.play(new PieceO(), new Position(2, 2));
    game.play(new PieceX(), new Position(1, 3));
    game.play(new PieceO(), new Position(1, 2));
    game.play(new PieceX(), new Position(3, 2));
    game.play(new PieceO(), new Position(2, 1));
    game.play(new PieceX(), new Position(2, 3));
    game.play(new PieceO(), new Position(3, 3));
    game.play(new PieceX(), new Position(3, 1));
    game.result().should.be.eql('draw');
  });

});