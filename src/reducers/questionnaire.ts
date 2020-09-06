import { createReducer } from "@reduxjs/toolkit";
import { createQuestionnaire } from "constants/Actions";
import { Question } from "types/Questionnaire";

export type QuestionnaireState = {
  questions: Question[];
};

export default createReducer<QuestionnaireState>(
  {
    questions: [],
  },
  (builder) =>
    builder.addCase(createQuestionnaire, (state, { payload }) => ({
      ...state,
      ...payload,
    }))
);
