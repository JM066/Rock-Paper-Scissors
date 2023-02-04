import { useState, useEffect } from "react";
import { IPlay, Choice } from "./Play.interface";

function Play({ setChoice }: IPlay) {
  const playCompucter = () => {
    const num = Math.floor(Math.random() * 3);
    let result: Choice;
    switch (num) {
      case 0:
        result = "paper";
        break;
      case 1:
        result = "scissors";
        break;
      case 2:
        result = "rock";
        break;
      default:
        console.log("Please try again");
    }
    return result;
  };
  const handleClick = (item: "paper" | "scissors" | "rock") => {
    const computerChoice = playCompucter();
    setChoice({ me: item, computer: computerChoice });
  };
  return (
    <div>
      <button onClick={() => handleClick("paper")}>Paper</button>
      <button onClick={() => handleClick("scissors")}>Scissors</button>
      <button onClick={() => handleClick("rock")}>Rock</button>
    </div>
  );
}

export default Play;
