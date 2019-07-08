import InstrumentProcessor from "./InstrumentProcessor";
import TaskDispacher from "./TaskDispacher";
import Instrument from "./Instrument";
import Task from "./Task";
import Console from "./Console";

export default class App implements InstrumentProcessor {
  private taskDispacher: TaskDispacher;
  private instrument: Instrument;
  private console: Console;

  constructor(taskDispacher: TaskDispacher, instrument: Instrument, console: Console) {
    this.taskDispacher = taskDispacher;
    this.instrument = instrument;
    this.instrument.onFinish = this.onTaskFinish.bind(this);
    this.instrument.onError = this.onTaskError.bind(this);
    this.console = console;
  }

  process(): void {
    const task = this.taskDispacher.getTask();    
    this.instrument.execute(task);
  }

  private onTaskFinish(task: Task) {
    this.taskDispacher.finishedTask(task);
  }

  private onTaskError(error: Error, task: Task) {
    this.console.log(`An error occurre with task: ${task.name()}`);
  }

} 