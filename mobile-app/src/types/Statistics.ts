import { AnswerId } from "./questionBank";
import { Test } from "./test";

export type QuestionsHeatMapEntry = {
  answers: Array<AnswerId>;
  timesCorrect: number;
  timesWrong: number;
};

export type QuestionsHeatMap = {
  [key: string]: QuestionsHeatMapEntry;
};

export type TestHistory = Pick<Test, "questions">[];

export type QuestionBankStatistics = {
  totalQuestions: number;
  answeredQuestions: number;
  correctlyAnsweredQuestions: number;
};
