import { createReducer } from "@reduxjs/toolkit";
import { setQuestionBank } from "constants/actions";
import { QuestionBank } from "types/QuestionBank";

export default createReducer<QuestionBank>({}, (builder) =>
  builder.addCase(setQuestionBank, (state, { payload }) => ({
    ...state,
    ...payload,
  }))
);
