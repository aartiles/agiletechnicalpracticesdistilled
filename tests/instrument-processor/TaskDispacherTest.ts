import TaskDispacher from '../../src/instrument-processor/TaskDispacher';
import Task from '../../src/instrument-processor/Task';

export default class TaskDispacherTest implements TaskDispacher {
  getTask(): Task {
    return null;
  }
  finishedTask(task: Task): void {
  }
}
