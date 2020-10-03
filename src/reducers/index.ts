import { combineReducers } from "@reduxjs/toolkit";
import questionnaire, { QuestionnaireState } from "./questionnaire";
import statistics, { GlobalTestStatistics } from "./statistics";
import testHistory, { TestHistory } from "./testHistory";

export type EnhancedRootState = {
  questionnaire: QuestionnaireState;
  statistics: GlobalTestStatistics;
  testHistory: TestHistory;
};

export const rootReducer = combineReducers({
  questionnaire,
  statistics,
  testHistory,
});
