import Player from "./Player";
import Position from "./Position";
import NotYourTurnError from "./NotYourTurnError";

export default class TicTacToe {
  play(player: Player, position: Position) {
    throw new NotYourTurnError();
  }
}