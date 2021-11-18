import React from "react";

function Resetbtn(props) {
  const resetBall = (e) => {
    props.setAnswer(props.getAnswer(props.answersData));
    document.querySelector("#eightball-question").style.display = "flex";
    document.querySelector(
      "#eightball-answer"
    ).style.cssText = `display: none; background-color:black;`;
  };
  return (
    <button id="eightball-reset-btn" onClick={resetBall}>
      Reset
    </button>
  );
}

export default Resetbtn;
