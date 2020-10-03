import { combineReducers } from "@reduxjs/toolkit";
import questionnaire, { QuestionnaireState } from "./questionnaire";
import statistics, { GlobalTestStatistics } from "./statistics";

export type EnhancedRootState = {
  questionnaire: QuestionnaireState;
  statistics: GlobalTestStatistics;
};

export const rootReducer = combineReducers({
  questionnaire,
  statistics,
});
