class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet() {
      const greetingMessage = this.createChatBotMessage("Gracias por saludar, hay algo en lo que podemos ayudarte?")
      this.updateChatbotState(greetingMessage)
    }
  
    handleFaqList = () => {
      const message = this.createChatBotMessage(
        "¿Tienes alguna duda? Aquí esta el apartado de preguntas frecuentes!",
        {
          widget: "faqLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleLocationsList = () => {
      const message = this.createChatBotMessage(
        "Genial, vemos que quieres saber más sobre nuestros Coworking!",
        {
          widget: "locationsLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleFaresList = () => {
      const message = this.createChatBotMessage(
        "Disponemos de distintos tipos de tarifas, con determinadas caracteristicas. Haz click en el siguiente enlace para verlas!",
        {
          widget: "faresLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleAboutList = () => {
      const message = this.createChatBotMessage(
        "Spot at Work nacio como un grupo de emprendedores que tiene como mision generar ecosistemas profesionales y ofrecer espacios de trabajo.",
        {
          widget: "aboutLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;