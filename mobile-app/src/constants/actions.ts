import { createAction } from "@reduxjs/toolkit";
import { QuestionBankEntry, QuestionBank } from "types/QuestionBank";
import {
  Question,
  QuestionId,
  AnswerId,
  Questionnaire,
} from "types/Questionnaire";

const START_NEW_TEST = "START_NEW_TEST";
const SET_TEST_ANSWER = "SET_TEST_ANSWER";
const FINISH_CURRENT_TEST = "FINISH_CURRENT_TEST";
const SET_QUESTION_BANK = "SET_QUESTION_BANK";

export const startNewTest = createAction<{ questions: Question[] }>(
  START_NEW_TEST
);

export const setTestAnswer = createAction<{
  questionId: QuestionId;
  answerId: AnswerId;
}>(SET_TEST_ANSWER);

export const finishCurrentTest = createAction<Questionnaire>(
  FINISH_CURRENT_TEST
);
export const setQuestionBank = createAction<Record<string, QuestionBankEntry>>(
  SET_QUESTION_BANK
);
