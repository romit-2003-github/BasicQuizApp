import React, {useState,useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import "../App.css";

const EndScreen = () => {

    const {setGameState, score, setScore, userName} = useContext(QuizContext); 

    const restartQuiz = () =>{
        setGameState("menu");
        setScore(0);    
    }

  return (
    <>
      {/* <h1>Endscreen</h1> */}
      <div className="EndScreen">
        <h1>Thanks for taking part in this Quiz !</h1>
        <h1>{userName} !!</h1>
        <h1>Your Final Score is : </h1>
        <h1>{score}/{Questions.length}</h1>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </>
  )
}

export default EndScreen
