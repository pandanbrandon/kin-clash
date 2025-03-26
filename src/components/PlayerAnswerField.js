import React, {use, useState} from "react";
import SurveyBoard from "./SurveyBoard";

const PlayerAnswerField = () => {
    const currentSurvey = ['watermelon', 'apple', 'orange', 
        'grapes', 'banana', 'strawberry' ];
    
    const [playerAnswer, setPlayerAnswer] = useState('');
    
    const handleChange = (e) => {
        setPlayerAnswer(e.target.value); // update state as player types

                // e is the event object,
                // e.target is the input element (element triggering event), 
                // e.target.value is the value the player typed
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter'){
            console.log('Player typed: ', playerAnswer);
        }

        // Checks if 'fruit' contains 'whatPlayerTyped', case-insensitive
        const isInArray = currentSurvey.some(fruit => 
            fruit.toLowerCase() === playerAnswer.toLowerCase());

        if(isInArray){
        console.log({playerAnswer}, ' is in the list');
        }
    }

    // isInArray will be isOnBoard (fruit thing is a test)
    const isOnBoard = () => {
        
    }

    
    // ----------| Return |----------
    return (
        <div className="player-input-container">
            <input 
                className="player-input"
                placeholder="Type answer here..."

                value={playerAnswer}
                onChange={handleChange} // As player types
                onKeyDown={handleEnterKey} // When enter key is pressed
            ></input>
        </div>
    );
}

export default PlayerAnswerField;



