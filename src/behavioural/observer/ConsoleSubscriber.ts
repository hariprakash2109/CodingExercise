import { Observer } from "./Observer";

export class ConsoleSubscriber implements Observer<number> {
  private name: string;
  constructor(name: string) { this.name = name; }
  update(price: number): void {
    console.log(`[Subscriber:${this.name}] New price -> ${price}`);
  }
}
