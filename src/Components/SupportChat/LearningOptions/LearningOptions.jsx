import React from "react";

import "./LearningOptions.scss";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Coworkings",
      handler: props.actionProvider.handleLocationsList,
      id: 1,
    },
    { 
      text: "Tarifas", 
      handler: props.actionProvider.handleFaresList, 
      id: 2 },
    { 
      text: "Nosotros", 
      handler: props.actionProvider.handleAboutList,
      id: 3 },
    { 
      text: "FAQ", 
      handler: props.actionProvider.handleFaqList,
      id: 4 
    },];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
