import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Option.css";

const Option = ({option, selectOption, answer}) => {
    const [QuizState, dispatch] = useContext(QuizContext)
  return (
    <div className={`option ${
      QuizState.answerSelected && option === answer ? 'correct' : ''
    } ${
      QuizState.answerSelected && option !== answer ? 'wrong' : ''}`}
       onClick={() => selectOption()}>
        <p>{option}</p>
    </div>
  )
}

export default Option