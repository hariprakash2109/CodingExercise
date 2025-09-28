import { Subject } from "./Subject";

export class PriceTracker extends Subject<number> {
  private price = 0;

  setPrice(newPrice: number) {
    if (newPrice === this.price) return;
    this.price = newPrice;
    this.notify(this.price);
  }

  getPrice() { return this.price; }
}
