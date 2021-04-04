import { QuestionBlock } from "types/questionBank";
import { TestQuestion } from "types/test";
import { perfectShuffle } from "./questionShuffle";

type MakeTestProps = {
  questionBanks: QuestionBlock[];
  numberOfQuestions: number;
};

export const makeTest = ({
  questionBanks,
  numberOfQuestions,
}: MakeTestProps): TestQuestion[] => {
  const allQuestions = questionBanks.reduce<TestQuestion[]>(
    (sum, bank) => [
      ...sum,
      ...bank.questions.map((q) => ({
        ...q,
        questionBlockId: bank.id,
        index: 0,
      })),
    ],
    []
  );
  return perfectShuffle(allQuestions).slice(0, numberOfQuestions);
};
