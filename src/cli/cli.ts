import * as readline from "readline";
import { ConsoleAndFileLogger } from "../logger/ConsoleAndFileLogger";
import { handleError } from "../common/ErrorHandling";
import { PriceTracker } from "../behavioural/observer/PriceTracker";
import { ConsoleSubscriber } from "../behavioural/observer/ConsoleSubscriber";
import { CreditCardStrategy } from "../behavioural/strategy/CreditCardStrategy";
import { PayPalStrategy } from "../behavioural/strategy/PayPalStrategy";
import { ReportFactory } from "../creational/factory/ReportFactory";
import { UserProfileBuilder } from "../creational/builder/UserProfileBuilder";
import { LegacyLogger } from "../structural/adapter/LegacyLogger";
import { LoggerAdapter } from "../structural/adapter/LoggerAdapter";
import { BaseSender } from "../structural/decorator/BaseSender";
import { EncryptionDecorator } from "../structural/decorator/EncryptionDecorator";
import { CompressionDecorator } from "../structural/decorator/CompressionDecorator";

export class CLI {
  private rl: readline.Interface;
  private logger = new ConsoleAndFileLogger();

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> "
    });

    // friendly welcome
    this.logger.info("Design Patterns CLI started");
    this.showMenu();
    this.rl.on("line", async (line) => {
      const trimmed = line.trim();
      try {
        await this.handleCommand(trimmed);
      } catch (err) {
        handleError(err, "CLI.handleCommand", this.logger);
      }
     this.showMenu();

    });

    // graceful shutdown
    this.rl.on("close", () => {
      this.logger.info("CLI closed");
      process.exit(0);
    });
  }

  private showMenu() {
    console.log("\n=== Design Patterns Demo Menu ===");
    console.log("1) Observer (PriceTracker) demo");
    console.log("2) Strategy (Payment) demo");
    console.log("3) Factory Method (Report) demo");
    console.log("4) Builder (UserProfile) demo");
    console.log("5) Adapter (Legacy Logger) demo");
    console.log("6) Decorator (Message Sender) demo");
    console.log("exit) quit");
    this.rl.prompt();
  }

  private async handleCommand(cmd: string) {
    switch (cmd) {
      case "1": await this.demoObserver(); break;
      case "2": await this.demoStrategy(); break;
      case "3": await this.demoFactory(); break;
      case "4": await this.demoBuilder(); break;
      case "5": await this.demoAdapter(); break;
      case "6": await this.demoDecorator(); break;
      case "exit": this.rl.close(); break;
      case "": break;
      default: console.log("Unknown command:", cmd);
    }
  }

  private async demoObserver() {
    console.log("--- Observer demo ---");
    const tracker = new PriceTracker();
    const subA = new ConsoleSubscriber("A");
    const subB = new ConsoleSubscriber("B");
    tracker.attach(subA);
    tracker.attach(subB);
    tracker.setPrice(100);
    tracker.setPrice(105.5);
    tracker.detach(subB);
    tracker.setPrice(110);
    this.logger.info("Observer demo completed");
  }

  private async demoStrategy() {
    console.log("--- Strategy demo ---");
    const cc = new CreditCardStrategy("4111111111111111");
    const pp = new PayPalStrategy("user@example.com");
    await cc.pay(49.99);
    await pp.pay(19.95);
    this.logger.info("Strategy demo completed");
  }

  private async demoFactory() {
    console.log("--- Factory demo ---");
    const pdf = ReportFactory.create("pdf");
    const html = ReportFactory.create("html");
    console.log("PDF generated:", pdf.generate());
    console.log("HTML generated:", html.generate());
    this.logger.info("Factory demo completed");
  }

  private async demoBuilder() {
    console.log("--- Builder demo ---");
    const builder = new UserProfileBuilder()
      .setFirstName("Hari")
      .setLastName("Prakash")
      .setEmail("hariprakash2109@gmail.com")
      .setPhone("+918778156781");
    const profile = builder.build();
    console.log("Built profile:", profile);
    this.logger.info("Builder demo completed");
  }

  private async demoAdapter() {
    console.log("--- Adapter demo ---");
    const legacy = new LegacyLogger();
    const adapted = new LoggerAdapter(legacy);
    adapted.info("This is an info message via adapter");
    adapted.error("This is an error via adapter");
    this.logger.info("Adapter demo completed");
  }

  private async demoDecorator() {
    console.log("--- Decorator demo ---");
    const base = new BaseSender();
    const encrypted = new EncryptionDecorator(base);
    const compressedThenEncrypted = new CompressionDecorator(encrypted);
    await compressedThenEncrypted.send("Hello, this is a secret message!");
    this.logger.info("Decorator demo completed");
  }
}
