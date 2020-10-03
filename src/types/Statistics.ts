import { QuestionId, AnswerId } from "./Questionnaire";

export type GlobalTestStatistics = {
  /** Map with `QuestionId` as key. */
  questions: {
    [key: string]: {
      answers: Array<AnswerId>;
      timesCorrect: number;
      timesWrong: number;
    };
  };
};
