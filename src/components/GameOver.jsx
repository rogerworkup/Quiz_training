import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import wellDone from "../img/welldone.svg"

import "./GameOver.css"

const GameOver = () => {
  return (
    <div id="gameover">
        <h2>Fim de jogo!</h2>
        <p>Pontuação: x</p>
        <p>Você acertou y de z perguntas.</p>
        <img src= {wellDone} alt="Fim do Quiz" />
        <button>Reiniciar</button>
    </div>
  )
}

export default GameOver