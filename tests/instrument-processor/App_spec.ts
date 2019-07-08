import should from 'should';
import sinon from 'sinon';
import TaskDispacher from '../../src/instrument-processor/TaskDispacher';
import Instrument, { OnErrorEventCallback, OnFinishEventCallback } from '../../src/instrument-processor/Instrument';
import Task from '../../src/instrument-processor/Task';
import App from '../../src/instrument-processor/App';
import ThereAreNoTasksError from '../../src/instrument-processor/ThereAreNoTasksError';

class TaskDispacherTest implements TaskDispacher {
  getTask(): Task {
    return null;
  }

  finishedTask(task: Task): void {
    
  }
}

class InstrumentTest implements Instrument {
  public onFinish: OnFinishEventCallback
  public onError: OnErrorEventCallback;

  execute(task: Task): void {

  }
}

describe('Instrument Processor', () => {
  it('should get the next task and execute in on the instrument', () => {
    const task = new Task('task1');
    const taskDispacher = new TaskDispacherTest();
    sinon.stub(taskDispacher, 'getTask').onFirstCall().returns(task);

    const instrument = new InstrumentTest();
    const executeSpy = sinon.spy(instrument, 'execute');

    const app = new App(taskDispacher, instrument);    
    app.process();

    should(executeSpy.withArgs(task).calledOnce).be.ok();
  });

  it('should throw instrument execute exceptions', () => {
    const task = new Task('task1');
    const taskDispacher = new TaskDispacherTest();
    sinon.stub(taskDispacher, 'getTask').onFirstCall().returns(task);

    const instrument = new InstrumentTest();
    const executeStub = sinon.stub(instrument, 'execute');
    executeStub.onFirstCall().throws(ThereAreNoTasksError);

    should(() => {
      const app = new App(taskDispacher, instrument);    
      app.process();  
    }).throw('', ThereAreNoTasksError);
  });

});
