import { Question, QuestionBlock } from "types/questionBank";
import { perfectShuffle } from "./questionShuffle";

type MakeTestProps = {
  questionBanks: QuestionBlock[];
  numberOfQuestions: number;
};

export const makeTest = ({
  questionBanks,
  numberOfQuestions,
}: MakeTestProps): Question[] => {
  const allQuestions = questionBanks.reduce<Question[]>(
    (sum, bank) => [...sum, ...bank.questions],
    []
  );
  return perfectShuffle(allQuestions).slice(0, numberOfQuestions);
};
