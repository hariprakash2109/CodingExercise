export function assertNonEmpty(value: string, name = "value") {
  if (!value || value.trim().length === 0) {
    throw new Error(`${name} must be a non-empty string.`);
  }
}
