import { AnswerId, Question, QuestionId } from "./questionBank";

export enum TestMode {
  ALL = "ALL",
  NEVER_SEEN_BEFORE = "NEVER_SEEN_BEFORE",
  NEVER_SEEN_AND_WRONG = "NEVER_SEEN_AND_WRONG",
  WRONG_ONLY = "WRONG_ONLY",
}

export type TestQuestion = Question & {
  index: number;
  selected?: AnswerId;
};

export type Test = {
  currentQuestion: QuestionId;
  questions: TestQuestion[];
};
