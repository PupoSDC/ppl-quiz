import { combineReducers } from "@reduxjs/toolkit";
import currentTest from "./currentTest";
import questionBank from "./questionBank";
import { Questionnaire } from "types/Questionnaire";
import { QuestionBank } from "types/QuestionBank";

export type EnhancedRootState = {
  currentTest: Questionnaire;
  questionBank: QuestionBank;
};

export const rootReducer = combineReducers({
  currentTest,
  questionBank,
});
