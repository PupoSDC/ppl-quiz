import questions from "assets/questions";
import { QuestionBlockId } from "types/questionBank";
import { TestQuestion } from "types/test";

export const getTestScore = (questions: TestQuestion[]) => {
  const correctAnswers = questions.filter(
    ({ correct, selected }) => correct === selected
  );
  return (correctAnswers.length / questions.length) * 100;
};

export const getBlocksInTest = (
  questions: TestQuestion[]
): QuestionBlockId[] => {
  return Object.keys(
    questions.reduce<Record<QuestionBlockId, unknown>>((sum, question) => {
      sum[question.questionBlockId] = 1;
      return sum;
    }, {})
  );
};
