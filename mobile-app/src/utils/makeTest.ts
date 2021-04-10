import { QuestionBlock } from "types/questionBank";
import { QuestionsHeatMap } from "types/statistics";
import { TestQuestion } from "types/test";
import { biasedShuffle, perfectShuffle, ShuffleMode } from "./questionShuffle";

export type QuestionFilter = "ALL" | "WRONG_ONLY" | "NEVER_SEEN_AND_WRONG";

type MakeTestProps = {
  questionBanks: QuestionBlock[];
  questionsHeatMap: QuestionsHeatMap;
  numberOfQuestions: number;
  questionFilter?: QuestionFilter;
  shuffleMode?: ShuffleMode;
};

export const filterQuestionBanks = ({
  questionBanks,
  questionsHeatMap,
  questionFilter = "ALL",
}: Pick<
  MakeTestProps,
  "questionBanks" | "questionsHeatMap" | "questionFilter"
>): QuestionBlock[] =>
  questionBanks.map(({ questions, ...questionBank }) => ({
    ...questionBank,
    questions: questions.filter(({ id, correct }) => {
      const entry = questionsHeatMap[id];
      const neverSeenBefore = !entry?.answers.length;
      const lastAnswer = entry?.answers[entry?.answers.length - 1] ?? correct;
      const wrong = lastAnswer !== correct;
      console.log(
        questionFilter,
        neverSeenBefore,
        entry?.answers[entry?.answers.length]
      );
      switch (questionFilter) {
        case "ALL":
          return true;
        case "NEVER_SEEN_AND_WRONG":
          return neverSeenBefore || wrong;
        case "WRONG_ONLY":
          return wrong;
      }
    }),
  }));

export const makeTest = ({
  questionBanks,
  questionsHeatMap,
  numberOfQuestions,
  shuffleMode = "PERFECT",
  questionFilter = "ALL",
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

  const filteredQuestions = allQuestions.filter(({ id, correct }) => {
    const entry = questionsHeatMap[id];
    const neverSeenBefore = !entry?.answers.length;
    const lastAnswer = entry?.answers[entry?.answers.length] ?? "";
    const wrong = lastAnswer !== correct;
    switch (questionFilter) {
      case "ALL":
        return true;
      case "NEVER_SEEN_AND_WRONG":
        return neverSeenBefore && wrong;
      case "WRONG_ONLY":
        return wrong;
    }
  });

  const shuffledQuestions = (() => {
    switch (shuffleMode) {
      case "BIASED":
        return biasedShuffle(filteredQuestions);
      case "PERFECT":
        return perfectShuffle(filteredQuestions);
    }
  })();

  return shuffledQuestions
    .slice(0, numberOfQuestions)
    .map(({ answers, ...question }, index) => ({
      ...question,
      index,
      answers: perfectShuffle(answers),
    }));
};
