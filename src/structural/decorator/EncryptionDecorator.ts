import { DecoratorBase } from "./DecoratorBase";

function simpleEncrypt(s: string) {
  // trivial reversible transform (for demo only)
  return s.split("").reverse().join("");
}

export class EncryptionDecorator extends DecoratorBase {
  async send(msg: string): Promise<void> {
    const encrypted = simpleEncrypt(msg);
    console.log("[EncryptionDecorator] encrypted message:", encrypted);
    await this.wrapped.send(encrypted);
  }
}
