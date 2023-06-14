import './App.css';
import MainMenu from './components/MainMenu';
import React, { useState, useContext } from 'react';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './Helpers/Contexts';
function App() {

  const [gameState, setGameState] = useState("menu");
  const [score,setScore] = useState(0);
  const [userName,setUserName] = useState("");

  return (
    <div className="App">
      <h1>Welcome to QuizMania</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore, userName, setUserName }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
