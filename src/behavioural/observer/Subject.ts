import { Observer } from "./Observer";

export abstract class Subject<T> {
  private observers: Set<Observer<T>> = new Set();

  attach(observer: Observer<T>) {
    this.observers.add(observer);
  }

  detach(observer: Observer<T>) {
    this.observers.delete(observer);
  }

  protected notify(subject: T) {
    for (const obs of Array.from(this.observers)) {
      try {
        obs.update(subject);
      } catch (err) {
        // keep notifying others even if one observer fails
        console.error("Observer update failed:", err);
      }
    }
  }
}
