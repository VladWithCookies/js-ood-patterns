abstract class State {
  protected context: Context;

  setContext(context: Context) {
    this.context = context;
  }

  abstract startWork(): void;
  abstract finishWork(): void;
}

class Context {
  private state: State;

  setState(state: State) {
    this.state = state;
    this.state.setContext(this);
  }

  work() {
    this.state.startWork();
    this.state.finishWork();
    this.state.startWork();
    this.state.startWork();
    this.state.finishWork();
    this.state.finishWork();
  }
}

class ToDoState extends State {
  startWork() {
    const state = new InProgressState();

    console.log('Starting work...');
    this.context.setState(state);
  }

  finishWork() {
    console.log('Work has not started yet!')
  }
}

class InProgressState extends State {
  startWork() {
    console.log('Work has been already started!');
  }

  finishWork() {
    const state = new DoneState();

    console.log('Finishing work...');
    this.context.setState(state);
  }
}

class DoneState extends State {
  startWork() {
    const state = new InProgressState();

    console.log('Restarting work...');
    this.context.setState(state);
  }

  finishWork() {
    console.log('Work has already been finished!')
  }
}

const context = new Context();
const initialState = new ToDoState();

context.setState(initialState);
context.work();
