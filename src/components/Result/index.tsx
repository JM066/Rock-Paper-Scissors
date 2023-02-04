import React, { useEffect } from "react";
import { IResult } from "./Result.interface";

function Result({ choice, setIsStarted }: IResult) {
  return (
    <div>
      <div>{choice.me}</div>
      <div>{choice.computer}</div>
      <button onClick={() => setIsStarted(false)}>Try Again?</button>
    </div>
  );
}

export default Result;
