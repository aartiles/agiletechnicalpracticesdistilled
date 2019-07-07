import Source from "./Source";
import Destination from "./Destination";

export default class Copier {
  private source: Source;
  private destination: Destination;

  constructor(source: Source, destination: Destination) {
    this.source = source;
    this.destination = destination;
  }

  copy(): void {
    let char = this.source.getChar();
    while(char !== '\n') {
      this.destination.setChar(char);
      char = this.source.getChar();
    }
  }
}