import { PaymentStrategy } from "./PaymentStrategy";

export class CreditCardStrategy implements PaymentStrategy {
  constructor(private cardNumber: string) {}
  async pay(amount: number): Promise<boolean> {
    if (!this.cardNumber || this.cardNumber.length < 12) throw new Error("Invalid card number");
    console.log(`Charging ${amount} to credit card ${this.cardNumber.slice(-4)}`);
    // Simulate async network call
    await new Promise(r => setTimeout(r, 300));
    return true;
  }
}
