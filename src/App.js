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
        <h3 className="prompt">What fruit do people like to eat?</h3>
        
        <SurveyBoard updatedBoard={currentBoard}/>
        
        <div className='input-container'>
          <h1>Correct/Incorrect</h1>
        </div>
        
        <PlayerAnswerField
          answersBoard={answersBoard}
          setCurrentBoard={setCurrentBoard}  
        />

        <footer className="footer-notes">
          <p><strong>Notes 4/9/25: </strong> 
            Players can now guess and see changes to the board if its correct |
            Survey board changed from hard coded html to dynamic changing array |
            Created "handlePlayerAnswer" to update the array | 
            Learned callbacks/ callback features of set~~~ + .map()
          </p>
          <p>~B</p>
        </footer>
    </div>
  );
}

export default App;
