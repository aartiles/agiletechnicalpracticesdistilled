export default class Task {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  name(): string {
    return this._name;
  }
}