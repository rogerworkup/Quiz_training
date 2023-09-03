import { useContext } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './components/Welcome'
import Question from './components/Question'

import './App.css'

function App() {
  const [QuizState, dispatch] = useContext(QuizContext);

  return (
    <div className='App'>
      <h1>Quiz App</h1>
      {QuizState.gameStage === "Start" && <Welcome />}
      {QuizState.gameStage === "Playing" && <Question />}
    </div>
  )
}

export default App
