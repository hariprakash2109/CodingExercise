export class LegacyLogger {
  // Old method signature — different from our Logger interface.
  log(level: string, message: string) {
    console.log(`[LEGACY-${level}] ${message}`);
  }
}
