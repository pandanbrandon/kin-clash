import React, {use, useState} from "react";
import SurveyBoard from "./SurveyBoard";

const PlayerAnswerField = ({answersBoard, setCurrentBoard}) => {
    
    const [playerAnswer, setPlayerAnswer] = useState('');
    
    const handleChange = (e) => {
        setPlayerAnswer(e.target.value); // update state as player types

                // e is the event object,
                // e.target is the input element (element triggering event), 
                // e.target.value is the value the player typed
    }


    // handlePlayerAnswer() The core of the game
    const handlePlayerAnswer = (answer, currentBoard) => {
        // make a copy of currentBoard, cuz its 'read-only'
        const updatedBoard = [...currentBoard]; // ... = spread
        const indexOfCorrectAnswer = answersBoard.indexOf(answer); // index of answer

        if (indexOfCorrectAnswer !== -1) {
            updatedBoard[indexOfCorrectAnswer] = answersBoard[indexOfCorrectAnswer];
        } else {
        // don't change board, give X
        console.log("X, not on board!");
        }
        return updatedBoard;
    };

    // Enter key
    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
            submitAnswer();
        }
    };

    // submitAnswer func - resuse the ability to submit cuz i want 
    // enter AND a button

    const submitAnswer = () => {
        console.log("player's answer: ", playerAnswer);
            // Update the board state immutably
            // prevBoard is the current 'state' value, in this case current val of currentBoard
            setCurrentBoard(
              (prevBoard) => handlePlayerAnswer(playerAnswer, prevBoard) // computes NEW state value
            );
      
            /*
              ^^ the new state depends on the previous state (prevBoard).
              This makes the CALLBACK necessary to ensure we’re working 
              with the most recent and correct version of currentBoard.
      
              This is where we actually use handlePlayerAnswer
            */
        
            // clears textbox
            setPlayerAnswer("");
    }

    
    // ----------| Return |----------
    return (
        <div className="player-input-container">
            <div className="input-button-wrapper">
                <input 
                    className="player-input"
                    placeholder="Type answer here..."
                    value={playerAnswer}
                    onChange={handleChange} // As player types
                    onKeyDown={handleEnterKey} // When enter key is pressed
                />
                
                <button
                    className="submit-button"
                    onClick={submitAnswer}
                >Submit</button>
            </div>
        </div>
    );
}

export default PlayerAnswerField;


