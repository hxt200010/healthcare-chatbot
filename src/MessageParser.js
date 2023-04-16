//import {createFileAndAppend} from "./file"

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    //open history file and write user message
    //createFileAndAppend("chat_log.txt",message + "\n");
    return this.actionProvider.handleUserMessage(message);
  }
}

export default MessageParser;
