import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Option from './Options'

import "./Question.css"

const Question = () => {
    const [QuizState, dispatch] = useContext(QuizContext);
    const currentQuestion = QuizState.questions[QuizState.currentQuestion]

    const onSelectOption = (option) => {
      dispatch ({
        type: "CHECK_ANSWER", 
        payload: {answer: currentQuestion.answer, option},
      })
    };
    
  return (
    <div id='question'>
      <p>
          Pergunta {QuizState.currentQuestion + 1} de {QuizState.questions.length}
      </p>

      <h2>{currentQuestion.question}</h2>
      <div id='Options-container'>
          {currentQuestion.options.map((option) => (
            <Option 
            option = {option} 
            key={option} 
            answer={currentQuestion.answer} 
            selectOption = {() => onSelectOption(option)}
            />
          ))}
        </div>
            {QuizState.answerSelected && (
               <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>
                Continuar
               </button>
            )}
        </div>
  )
}

export default Question