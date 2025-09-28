import { PaymentStrategy } from "./PaymentStrategy";

export class PayPalStrategy implements PaymentStrategy {
  constructor(private email: string) {}
  async pay(amount: number): Promise<boolean> {
    if (!this.email.includes("@")) throw new Error("Invalid PayPal email");
    console.log(`Charging ${amount} via PayPal account ${this.email}`);
    await new Promise(r => setTimeout(r, 300));
    return true;
  }
}
