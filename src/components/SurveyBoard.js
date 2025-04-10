import React, {useState} from "react";

const SurveyBoard = ({updatedBoard}) => {

  // idea: main function is a dynamically changing array
  return(
    <div className="survey-board">
      {updatedBoard.map(
      (
        item,
        index // item, element at index... well indexOf
      ) => (
        // (currentElement, currentElementIndex)
        <p key={index} className="survey-box">
          {item}
        </p>
      )
    )}
    </div>
    
  );
}

export default SurveyBoard;


