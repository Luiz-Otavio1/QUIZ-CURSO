import { useState, useContext, useEffect } from 'react'
import { QuizContext } from "./context/quiz";

import './App.css'

import Wellcome from './components/Wellcome'
import Question from './components/Question'
import GameOver from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: "REORDER_QUESTION"})
  }, [])

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Wellcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
