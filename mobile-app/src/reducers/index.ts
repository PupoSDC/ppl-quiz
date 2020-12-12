import { combineReducers } from "@reduxjs/toolkit";
import questionnaire from "./currentTest";
import questionBank from "./questionBank";
import { Questionnaire } from "types/Questionnaire";
import { QuestionBank } from "types/QuestionBank";

export type EnhancedRootState = {
  questionnaire: Questionnaire;
  questionBank: QuestionBank;
};

export const rootReducer = combineReducers({
  questionnaire,
  questionBank,
});
