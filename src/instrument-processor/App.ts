import InstrumentProcessor from "./InstrumentProcessor";
import TaskDispacher from "./TaskDispacher";
import Instrument from "./Instrument";
import Task from "./Task";

export default class App implements InstrumentProcessor {
  private taskDispacher: TaskDispacher;
  private instrument: Instrument;

  constructor(taskDispacher: TaskDispacher, instrument: Instrument) {
    this.taskDispacher = taskDispacher;
    this.instrument = instrument;
    this.instrument.onFinish = this.onTaskFinish.bind(this);
  }

  process(): void {
    const task = this.taskDispacher.getTask();    
    this.instrument.execute(task);
  }

  private onTaskFinish(task: Task) {
    this.taskDispacher.finishedTask(task);
  }
} 