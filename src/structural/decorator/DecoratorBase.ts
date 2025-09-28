import { MessageSender } from "./MessageSender";

export abstract class DecoratorBase implements MessageSender {
  constructor(protected wrapped: MessageSender) {}
  abstract send(msg: string): Promise<void>;
}
