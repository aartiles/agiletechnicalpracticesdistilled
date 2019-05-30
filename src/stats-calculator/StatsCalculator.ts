export default class StatsCalculator {
  private list: Array<number>;

  constructor(list: Array<number>) {
    this.list = list;
  }

  minimum(): number {
    if (this.list.length === 0) return 0;
    return this.list.reduce((min, item) => {
      return item < min ? item : min;
    }, this.list[0]);
  }

  maximum(): number {
    if (this.list.length === 0) return 0;
    return this.list.reduce((max, item) => {
      return item > max ? item : max;
    }, this.list[0]);
  }

  size(): number {
    return this.list.length;
  }

  avg(): number {
    return 0;
  }

}