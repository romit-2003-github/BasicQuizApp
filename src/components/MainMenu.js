import React from 'react'
import "../App.css";
import { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
const MainMenu = () => {

    const {gameState, setGameState, userName, setUserName} = useContext(QuizContext)


    return (
        <>
            {/* <h1>Main Menu</h1> */}
            <div className="Menu">
                <input type="text" placeholder='Enter your Name here' onChange={(e) => setUserName(e.target.value)} />
                <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
            </div>
        </>
    )
}

export default MainMenu
