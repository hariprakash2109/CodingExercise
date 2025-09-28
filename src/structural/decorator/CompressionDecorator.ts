import { DecoratorBase } from "./DecoratorBase";

function simpleCompress(s: string) {
  // naive compression: remove vowels (demo only)
  return s.replace(/[aeiouAEIOU]/g, "");
}

export class CompressionDecorator extends DecoratorBase {
  async send(msg: string): Promise<void> {
    const compressed = simpleCompress(msg);
    console.log("[CompressionDecorator] compressed message:", compressed);
    await this.wrapped.send(compressed);
  }
}
