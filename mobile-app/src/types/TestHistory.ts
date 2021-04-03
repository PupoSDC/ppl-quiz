import { QuestionId, AnswerId } from "./Questionnaire";

/** Number from 0 to 100 (percentage of score obtained) */
export type TestGrade = number;

export type TestStatisticsQuestion = {
  questionId: QuestionId;
  selected?: AnswerId;
  correct: boolean;
};

export type TestStatistics = {
  questions: Array<TestStatisticsQuestion>;
  grade: TestGrade;
};

export type TestHistory = {
  tests: TestStatistics[];
};
