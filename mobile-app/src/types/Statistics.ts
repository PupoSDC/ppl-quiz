import { QuestionId, AnswerId } from "./questionBank";

export type QuestionsHeatMapEntry = {
  answers: Array<AnswerId>;
  timesCorrect: number;
  timesWrong: number;
};

/** Map with `QuestionId` as key. */
export type QuestionsHeatMap = {
  [key: string]: QuestionsHeatMapEntry;
};

export type GlobalTestStatistics = {
  questions: QuestionsHeatMap;
};

export type QuestionBankStatistics = {
  totalQuestions: number;
  answeredQuestions: number;
  correctlyAnsweredQuestions: number;
};
