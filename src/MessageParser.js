class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
    this.onMessageParsed = onMessageParsed;
  }

  parse(message) {
    console.log(message);
    if (this.onMessageParsed) {
      this.onMessageParsed(message);
    }
    return this.actionProvider.handleUserMessage(message);
  }
}

export default MessageParser;
