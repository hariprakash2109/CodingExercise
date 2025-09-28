import { Logger } from "./Logger";
import { promises as fs } from "fs";
import * as path from "path";

export class ConsoleAndFileLogger implements Logger {
  private filePath: string;

  constructor(filename = "app.log") {
    this.filePath = path.join(process.cwd(), filename);
  }

  private async writeToFile(level: string, msg: string) {
    const line = `[${new Date().toISOString()}] ${level} - ${msg}\n`;
    try {
      await fs.appendFile(this.filePath, line, { encoding: "utf8" });
    } catch (err) {
      // If file logging fails, fallback to console — don't crash the app.
      console.error("Failed to write log:", err);
    }
  }

  debug(...args: any[]) {
    const msg = args.map(String).join(" ");
    console.debug(msg);
    this.writeToFile("DEBUG", msg);
  }
  info(...args: any[]) {
    const msg = args.map(String).join(" ");
    console.info(msg);
    this.writeToFile("INFO", msg);
  }
  warn(...args: any[]) {
    const msg = args.map(String).join(" ");
    console.warn(msg);
    this.writeToFile("WARN", msg);
  }
  error(...args: any[]) {
    const msg = args.map(String).join(" ");
    console.error(msg);
    this.writeToFile("ERROR", msg);
  }
}
