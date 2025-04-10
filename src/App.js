import './App.css';
import SurveyBoard from './components/SurveyBoard';
import PlayerAnswerField from './components/PlayerAnswerField';
import { useState } from 'react';

function App() {
  // hardcoded board for now
  const answersBoard = [
    "strawberry",
    "watermelon",
    "mango",
    "banana",
    "apple",
    "grape",
  ];

  const [currentBoard, setCurrentBoard] = useState([1, 2, 3, 4, 5, 6]);
  
  return (
    <div className="App">
      <>
        <h3 className="prompt">What fruit do people like to eat?</h3>
        
        <SurveyBoard updatedBoard={currentBoard}/>
        
        <div className='input-container'>
          <h1>Correct/Incorrect</h1>
        </div>
        
        <PlayerAnswerField
          answersBoard={answersBoard}
          setCurrentBoard={setCurrentBoard}  
        />
      </>
    </div>
  );
}

export default App;
