import React, { useState } from "react";
import "../styles/Eightball.css";
import answersData from "../static/data";
import Resetbtn from "./Resetbtn";

function Eightball(props) {
  const getAnswer = (answers) => {
    const idx = Math.floor(Math.random() * answers.length);
    return answers[idx];
  };
  const handleClick = (e) => {
    document.querySelector("#eightball-answer").innerText = answer.msg;
    document.querySelector("#eightball-question").style.display = "none";
    document.querySelector("#eightball-answer").style.cssText = `display: flex; background-color:${answer.color};`;
  };
  const [answer, setAnswer] = useState(getAnswer(answersData));
  return (
    <div className="Eightball-container">
      <div
        className="Eightball-question"
        id="eightball-question"
        onClick={handleClick}
      >
        Think a question
      </div>
      <div className="Eightball-answer" id="eightball-answer"></div>
      <Resetbtn getAnswer={getAnswer} setAnswer={setAnswer} answersData={answersData}/>
    </div>
  );
}

export default Eightball;
