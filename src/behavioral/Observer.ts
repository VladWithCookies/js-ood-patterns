class Observer {
  update(observable: Observable) {
    console.log(`Subject state is ${observable.state}`);
  }
}

class Observable {
  state: number = 0;

  private observers: Set<Observer> = new Set();

  subscribe(observer: Observer) {
    this.observers.add(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers.delete(observer);
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

const observable = new Observable();
const observer = new Observer();

observable.subscribe(observer);
observable.state = 1;
observable.notify();
