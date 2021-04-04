import {
  AnswerId,
  Question,
  QuestionBlockId,
  QuestionId,
} from "./questionBank";

export enum TestMode {
  ALL = "ALL",
  NEVER_SEEN_BEFORE = "NEVER_SEEN_BEFORE",
  NEVER_SEEN_AND_WRONG = "NEVER_SEEN_AND_WRONG",
  WRONG_ONLY = "WRONG_ONLY",
}

export type TestQuestion = Question & {
  index: number;
  questionBlockId: QuestionBlockId;
  selected?: AnswerId;
};

export type Test = {
  questions: TestQuestion[];
  finished: boolean;
};
