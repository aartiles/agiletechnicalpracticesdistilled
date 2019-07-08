import Task from "./Task";

export type OnFinishEventCallback = (task: Task) => void;
export type OnErrorEventCallback = (task: Task) => void;

export default interface Instrument {
  execute(task: Task): void
  onFinish: OnFinishEventCallback
  onError: OnErrorEventCallback
}