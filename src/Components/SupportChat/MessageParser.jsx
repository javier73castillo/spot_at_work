class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("buenas") || lowerCaseMessage.includes("hola")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("saber mas")) {
        this.actionProvider.handleAboutList();
      }
      if (lowerCaseMessage.includes("tarifa")) {
        this.actionProvider.handleFaresList();
      }
      if (lowerCaseMessage.includes("pregunta")) {
        this.actionProvider.handleFaqList();
      }
      if (lowerCaseMessage.includes("coworking")) {
        this.actionProvider.handleLocationsList();
      }
    }
  }

  export default MessageParser;