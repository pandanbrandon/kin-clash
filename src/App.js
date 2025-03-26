import './App.css';
import SurveyBoard from './components/SurveyBoard';
import PlayerAnswerField from './components/PlayerAnswerField';

function App() {
  return (
    <div className="App">
      <>
        <SurveyBoard />
        <div className='input-container'>
          <h1>Correct/Incorrect</h1>
        </div>
        <PlayerAnswerField />
        
      </>
    </div>
  );
}

export default App;
