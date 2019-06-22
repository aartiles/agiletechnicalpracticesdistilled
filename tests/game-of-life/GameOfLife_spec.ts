import should from 'should';
import GameOfLife from '../../src/game-of-life/GameOfLife';
import Board from '../../src/game-of-life/Board';
import Cell from '../../src/game-of-life/Cell';

describe('Game of life', () => {
  context('Any live cell with fewer than two live neighbors dies', () => {
    it('Board of Cell.LivexCell.Live and one dead cell continues dead', () => {
      const board = new Board([[Cell.Dead()]]);
      const game = new GameOfLife(board);
      game.tick();
      game.parternMatch(new Board([[Cell.Dead()]])).should.be.ok();
    });  

    it('Board of 2x2 and one dead cell continues dead', () => {
      const board = new Board([
        [Cell.Dead(), Cell.Dead()],
        [Cell.Dead(), Cell.Dead()]
      ]);
      const game = new GameOfLife(board);
      game.tick();
      game.parternMatch(new Board([
        [Cell.Dead(), Cell.Dead()],
        [Cell.Dead(), Cell.Dead()]
      ])).should.be.ok();
    });

    it('Board of Cell.LivexCell.Live and one live cell, the cell dies', () => {
      const board = new Board([[Cell.Live()]]);
      const game = new GameOfLife(board);
      game.tick();
      game.parternMatch(new Board([[Cell.Dead()]])).should.be.ok();
    });  

    it('Board of 2x2 and one live cell, the cell dies', () => {
      const board = new Board([
        [Cell.Live(), Cell.Dead()],
        [Cell.Dead(), Cell.Dead()]]);
      const game = new GameOfLife(board);
      game.tick();
      game.parternMatch(new Board([
        [Cell.Dead(), Cell.Dead()],
        [Cell.Dead(), Cell.Dead()]])).should.be.ok();
    });  

  });

  context('Any live cell with more than three live neighbors dies', () => {
    it('Board of 2x2 and all live cells, all remain alive', () => {
      const board = new Board([
        [Cell.Live(), Cell.Live()],
        [Cell.Live(), Cell.Live()]
      ]);
      const game = new GameOfLife(board);
      game.tick();
      should(game.parternMatch(new Board([
        [Cell.Live(), Cell.Live()],
        [Cell.Live(), Cell.Live()]
      ]))).be.ok();
    });

    it('Board of 3x2 and all live cells, 2 cells die', () => {
      const board = new Board([
        [Cell.Live(), Cell.Live(), Cell.Live()],
        [Cell.Live(), Cell.Live(), Cell.Live()]
      ]);
      const game = new GameOfLife(board);
      game.tick();
      game.parternMatch(new Board([
        [Cell.Live(), Cell.Dead(), Cell.Live()],
        [Cell.Live(), Cell.Dead(), Cell.Live()]
      ])).should.be.ok();
    });   
  });

  context('Any dead cell with exactly three live neighbors becomes a live cell', () => {
    it('Board of 2x2 and 3 live cells, all are alive', () => {
      const board = new Board([
        [Cell.Dead(), Cell.Live()],
        [Cell.Live(), Cell.Live()]
      ]);
      const game = new GameOfLife(board);
      game.tick();
      game.parternMatch(new Board([
        [Cell.Live(), Cell.Live()],
        [Cell.Live(), Cell.Live()]
      ])).should.be.ok();
    });

    it('Board of 3x2 and all live cells, 3 cells die', () => {
      const board = new Board([
        [Cell.Live(), Cell.Live(), Cell.Live()],
        [Cell.Live(), Cell.Live(), Cell.Live()],
        [Cell.Live(), Cell.Live(), Cell.Live()]
      ]);
      const game = new GameOfLife(board);
      game.tick();
      game.parternMatch(new Board([
        [Cell.Live(), Cell.Dead(), Cell.Live()],
        [Cell.Dead(), Cell.Dead(), Cell.Dead()],
        [Cell.Live(), Cell.Dead(), Cell.Live()]
      ])).should.be.ok();
    });   
  });

});  
