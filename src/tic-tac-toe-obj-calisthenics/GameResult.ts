export default class GameResult {
  private _result: string;
  
  constructor(result: string) {
    this._result = result;
  }

  value(): string {
    return this._result;
  }
}