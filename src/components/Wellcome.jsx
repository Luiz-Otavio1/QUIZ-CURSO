import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Wellcome.css";
import Quiz from "../img/quiz.svg";

const Wellcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE" })}>
        iniciar
      </button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Wellcome;
