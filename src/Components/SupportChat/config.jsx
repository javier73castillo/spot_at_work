import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import LinkList from "./LinkList/LinkList";
import LearningOptions from "./LearningOptions/LearningOptions";




const config = {
  
  initialMessages: [
    createChatBotMessage("Hola Coworker! Aquí tenemos ciertas sesiones en las que podrías estar interesado. ", {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "locationsLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Coworking",
            url: "/locations",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "aboutLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Spot at Work",
            url: "/about",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "faqLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Preguntas Frecuentes",
            url: "/faq",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "faresLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Tarifas",
            url: "/fares",
            id: 1,
          },
        ],
      },
    },
  ],
}

export default config