import { makeObservable, observable, action } from 'mobx';

export class Counter {
  numberOfClicks = 0;

  constructor() {
    // Automatically re-renders when the numberOfClicks changes
    makeObservable(this, {
      numberOfClicks: observable,
      // It defines action.
      increment: action,
    });
  }

  increment = (amount) => {
    this.numberOfClicks += amount;
  };
}
