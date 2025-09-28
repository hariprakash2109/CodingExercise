import { MessageSender } from "./MessageSender";

export class BaseSender implements MessageSender {
  async send(msg: string): Promise<void> {
    console.log("[BaseSender] Sending message:", msg);
  }
}
