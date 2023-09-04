import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import "./Question.css"

const Question = () => {
    const [QuizState, dispatch] = useContext(QuizContext);
    const currentQuestion = QuizState.questions[QuizState.currentQuestion]
    
  return (
    <div id='question'>
        <p>
            Pergunta {QuizState.currentQuestion + 1} de {QuizState.questions.length}
        </p>

        <h2>{currentQuestion.question}</h2>
        <div id='Options-container'>
            <p>Opções</p>
        </div>
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )
}

export default Question