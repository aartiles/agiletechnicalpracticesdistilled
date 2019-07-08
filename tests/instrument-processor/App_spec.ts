import should from 'should';
import sinon from 'sinon';
import TaskDispacher from '../../src/instrument-processor/TaskDispacher';
import Instrument, { OnErrorEventCallback, OnFinishEventCallback } from '../../src/instrument-processor/Instrument';
import Task from '../../src/instrument-processor/Task';
import App from '../../src/instrument-processor/App';
import Console from '../../src/instrument-processor/Console';
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

class ConsoleTest implements Console {
  log(message: string): void {

  }
}

describe('Instrument Processor', () => {
  it('should get the next task and execute in on the instrument', () => {
    const task = new Task('task1');
    const taskDispacher = new TaskDispacherTest();
    sinon.stub(taskDispacher, 'getTask').onFirstCall().returns(task);

    const instrument = new InstrumentTest();
    const executeSpy = sinon.spy(instrument, 'execute');

    const app = new App(taskDispacher, instrument, console);    
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
      const app = new App(taskDispacher, instrument, console);    
      app.process();  
    }).throw('', ThereAreNoTasksError);
  });

  it('should call the dispacher finishedTask when the task finish event is fired', () => {
    const task = new Task('task1');
    const taskDispacher = new TaskDispacherTest();
    sinon.stub(taskDispacher, 'getTask').onFirstCall().returns(task);
    const finishedTaskSpy = sinon.stub(taskDispacher, 'finishedTask');

    const instrument = new InstrumentTest();
    sinon.stub(instrument, 'execute').onFirstCall().callsFake(() => instrument.onFinish(task));

    const app = new App(taskDispacher, instrument, console);    
    app.process();

    should(finishedTaskSpy.withArgs(task).calledOnce).be.ok();
  });

  it('should write error message on the console when an error event is fired', () => {
    const task = new Task('task1');
    const taskDispacher = new TaskDispacherTest();
    sinon.stub(taskDispacher, 'getTask').onFirstCall().returns(task);    

    const instrument = new InstrumentTest();
    sinon.stub(instrument, 'execute').onFirstCall().callsFake(() => instrument.onError(new Error('dummy error'), task));

    const console = new ConsoleTest();
    const logSpy = sinon.stub(console, 'log');

    const app = new App(taskDispacher, instrument, console);    
    app.process();

    should(logSpy.withArgs('An error occurre with task: task1').calledOnce).be.ok();
  });

});
