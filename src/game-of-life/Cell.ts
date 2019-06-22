enum CellType {
  Live = 'L',
  Dead = 'D'
};

export default class Cell {
  private type: CellType;

  constructor(type: CellType) {
    this.type = type;
  }

  static Live(): Cell {
    return new Cell(CellType.Live);
  }

  static Dead(): Cell {
    return new Cell(CellType.Dead);
  }

  isALive(): boolean {
    return this.type === CellType.Live;
  }

  isDead(): boolean {
    return this.type === CellType.Dead;
  }

  equals(cell: Cell): boolean {
    return this.type === cell.type;
  }

};