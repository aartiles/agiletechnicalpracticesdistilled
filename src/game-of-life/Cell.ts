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

  transform(liveNeighbors: number): Cell {
    if (this.isALive() && liveNeighbors < 2) {
      return Cell.Dead();
    }
    else if (this.isALive() && (liveNeighbors === 2 || liveNeighbors === 3)) {
      return Cell.Live();
    }
    else if (this.isALive() && liveNeighbors > 3) {
      return Cell.Dead();
    }
    else if (this.isDead() && liveNeighbors === 3) {
      return Cell.Live();
    }
    else return this;
  }

};