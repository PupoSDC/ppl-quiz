import { createAction } from "@reduxjs/toolkit";
import {
  Question,
  QuestionId,
  AnswerId,
  QuestionBlock,
} from "types/questionBank";
import { TestQuestion } from "types/test";

const SET_QUESTION_BANKS = "SET_QUESTION_BANKS";
const SET_CURRENT_TEST = "SET_CURRENT_TEST";
const SET_CURRENT_TEST_REVIEW = "SET_CURRENT_TEST_REVIEW";
const SET_CURRENT_TEST_ANSWER = "SET_CURRENT_TEST_ANSWER";
const SET_CURRENT_TEST_FINISHED = "SET_CURRENT_TEST_FINISHED";
const RESET_CURRENT_TEST = "RESET_CURRENT_TEST";
const RESET_PROGRESS = "RESET_PROGRESS";

export const setQuestionBanks = createAction<{
  questionBlocks: QuestionBlock[];
}>(SET_QUESTION_BANKS);

export const setCurrentTest = createAction<{
  questions: TestQuestion[];
}>(SET_CURRENT_TEST);

export const setCurrentTestReview = createAction<{
  questions: TestQuestion[];
}>(SET_CURRENT_TEST_REVIEW);

export const setCurrentTestAnswer = createAction<{
  questionId: QuestionId;
  answerId: AnswerId;
}>(SET_CURRENT_TEST_ANSWER);

export const setCurrentTestFinished = createAction<{
  questions: TestQuestion[];
}>(SET_CURRENT_TEST_FINISHED);

export const resetCurrentTest = createAction(RESET_CURRENT_TEST);
export const resetProgress = createAction(RESET_PROGRESS);
