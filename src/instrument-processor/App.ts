import InstrumentProcessor from "./InstrumentProcessor";
import TaskDispacher from "./TaskDispacher";
import Instrument from "./Instrument";

export default class App implements InstrumentProcessor {
  private taskDispacher: TaskDispacher;
  private instrument: Instrument;

  constructor(taskDispacher: TaskDispacher, instrument: Instrument) {
    this.taskDispacher = taskDispacher;
    this.instrument = instrument;
  }

  process(): void {
    const task = this.taskDispacher.getTask();
    this.instrument.execute(task);
  }
} 