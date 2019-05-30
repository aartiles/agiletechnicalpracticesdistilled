export default class StatsCalculator {
  private list: Array<number>;

  constructor(list: Array<number>) {
    this.list = list;
  }

  minimum(): number {
    if (this.size() === 0) return 0;
    return this.list.reduce((min, item) => {
      return item < min ? item : min;
    }, this.list[0]);
  }

  maximum(): number {
    if (this.size() === 0) return 0;
    return this.list.reduce((max, item) => {
      return item > max ? item : max;
    }, this.list[0]);
  }

  size(): number {
    return this.list.length;
  }

  avg(): number {
    if (this.size() === 0) return 0;
    return this.total() / this.size();
  }

  private total(): number {
    return this.list.reduce((total, item) => total + item, 0);
  }

}