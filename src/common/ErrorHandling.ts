import { Logger } from "../logger/Logger";

export function handleError(err: any, context = "unspecified", logger?: Logger) {
  const message = `[${new Date().toISOString()}] Error in ${context}: ${err?.message || String(err)}`;
  if (logger) {
    try { logger.error(message); } catch (_) { console.error(message); }
  } else {
    console.error(message);
  }
  // Re-throwing is intentionally avoided in demos to keep long-running process alive.
}
