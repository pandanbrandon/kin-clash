import { useState } from 'react';
import './App.css';
import SurveyBoard from './components/SurveyBoard';
import PlayerAnswerField from './components/PlayerAnswerField';
import Strikes from './components/Strikes';

function App() {
  // hardcoded board for now
  const answersBoard = [
    "banana",
    "apple",
    "strawberry",
    "grape",
    "watermelon",
    "orange",
  ];

  // useState for the board array
  const [currentBoard, setCurrentBoard] = useState([1, 2, 3, 4, 5, 6]);
  
  // number of strikes (max 3)
  const [strikes, setStrikes] = useState([]); // blank array


  ////// RETURN //////
  return (
    <div className="App">
        <h3 className='strikes'>Strikes: {strikes}</h3>
        <h3 className="prompt">What fruit do people like to eat?</h3>
        
        <SurveyBoard updatedBoard={currentBoard}/>
        
        <div className='input-container'>
          <h1>Correct/Incorrect</h1>
        </div>
        
        <PlayerAnswerField
          answersBoard={answersBoard}
          setCurrentBoard={setCurrentBoard}
          strikes={strikes}
          setStrikes={setStrikes}  
        />

        <footer className="footer-notes">
          <p><strong>Notes 4/16/25: </strong> 
            Added an unfinshed strike feature. If you give an answer thats not on 
            the board, an X will be added up in "Strikes:" | Modified answers for fruit,
            see if you can get all 6 now
          </p>

          <p><strong>Notes 4/9/25: </strong> 
            Players can now guess and see changes to the board if its correct |
            Survey board changed from hard coded html to dynamic changing array |
            Created "handlePlayerAnswer" to update the array | 
            Learned callbacks/ callback features of set~~~ + .map() |
            Added button, isolated submit function so enter and button works |
            Not case sensitive
          </p>
          <p>~B</p>
        </footer>
    </div>
  );
}

export default App;
