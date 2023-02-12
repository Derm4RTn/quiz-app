import React from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import QuestionCard from './Components/QuestionCard';

const App = () => {

  const startTrivia = async () => {
    
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  
  }

  const nextQuestion = () => {


  }
  
  return (
  <div className='App'>
    <h1> REACT QUIZ</h1>
    <button className='start' onClick = {startTrivia}>
      Start
    </button>
    <p className="score">Score: </p>
    <p> Loading Questions ...</p>
    <QuestionCard /> 
    <button className='next' onClick={nextQuestion}>
      Next Question
    </button>
  </div>  
  )
}

export default App;
