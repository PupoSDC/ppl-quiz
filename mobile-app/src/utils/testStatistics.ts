import { TestQuestion } from "types/test";

export const getTestScore = (questions: TestQuestion[]) => {
  const correctAnswers = questions.filter(
    ({ correct, selected }) => correct === selected
  );
  return (correctAnswers.length / questions.length) * 100;
};
