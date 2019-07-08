import Instrument, { OnErrorEventCallback, OnFinishEventCallback } from '../../src/instrument-processor/Instrument';
import Task from '../../src/instrument-processor/Task';

export default class InstrumentTest implements Instrument {
  public onFinish: OnFinishEventCallback;
  public onError: OnErrorEventCallback;
  execute(task: Task): void {
  }
}
