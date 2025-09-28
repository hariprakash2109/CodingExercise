export interface MessageSender {
  send(msg: string): Promise<void>;
}
