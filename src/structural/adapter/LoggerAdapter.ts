import { LegacyLogger } from "./LegacyLogger";
import { Logger } from "../../logger/Logger";

export class LoggerAdapter implements Logger {
  constructor(private legacy: LegacyLogger) {}
  debug(...args: any[]) { this.legacy.log("DEBUG", args.join(" ")); }
  info(...args: any[]) { this.legacy.log("INFO", args.join(" ")); }
  warn(...args: any[]) { this.legacy.log("WARN", args.join(" ")); }
  error(...args: any[]) { this.legacy.log("ERROR", args.join(" ")); }
}
