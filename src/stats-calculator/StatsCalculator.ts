export default class StatsCalculator {
  private list: Array<number>;

  constructor(list: Array<number>) {
    this.list = list;
  }

  minimum(): number {
    return this.list.reduce((min, item) => {
      return item < min ? item : min;
    }, 0);
  }

  maximum(): number {
    return 0;
  }

  size(): number {
    return 0;
  }

  avg(): number {
    return 0;
  }

}