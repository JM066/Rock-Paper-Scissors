type Choice = "rock" | "scissors" | "paper" | undefined;
export interface IResult {
  choice: {
    me?: Choice;
    computer?: Choice;
  };
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}
