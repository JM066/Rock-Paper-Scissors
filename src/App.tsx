import { useState, useEffect } from "react";
import Play from "./components/Play";
import Result from "./components/Result";
import "./styles/global.scss";

type Game = "paper" | "scissors" | "rock" | undefined;
function App() {
  const [score, setScore] = useState<number>(
    Number(localStorage.getItem("score")) || 0
  );
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [choice, setChoice] = useState<{ me: Game; computer: Game }>({
    me: undefined,
    computer: undefined,
  });
  console.error("render??");
  useEffect(() => {
    setIsStarted(true);
    if (choice.me === "paper") {
      if (choice.computer === "scissors") setScore((prev) => (prev -= 1));
      else if (choice.computer === "rock") setScore((prev) => (prev += 1));
      else return;
    }
    if (choice.me === "scissors") {
      if (choice.computer === "paper") setScore((prev) => (prev += 1));
      else if (choice.computer === "rock") setScore((prev) => (prev -= 1));
      else return;
    }
    if (choice.me === "rock") {
      if (choice.computer === "paper") setScore((prev) => (prev -= 1));
      else if (choice.computer === "scissors") setScore((prev) => (prev += 1));
      else return;
    }
  }, [choice]);
  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <>
      <div>{`Score: ${score}`}</div>
      {!isStarted ? (
        <Play setChoice={setChoice} />
      ) : (
        <Result choice={choice} setIsStarted={setIsStarted} />
      )}
    </>
  );
}

export default App;
