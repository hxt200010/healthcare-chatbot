class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    //message = message.toLowerCase();
    console.log(message);
    return this.actionProvider.handleUserMessage(message);
  }
}

export default MessageParser;
