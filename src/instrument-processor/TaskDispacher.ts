import Task from "./Task";

export default interface TaskDispacher {
  getTask(): Task
  finishedTask(task: Task): void
}