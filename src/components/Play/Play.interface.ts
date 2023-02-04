export type Choice = "rock" | "scissors" | "paper" | undefined;
export interface IPlay {
  setChoice: React.Dispatch<
    React.SetStateAction<{
      me: Choice;
      computer: Choice;
    }>
  >;
}
