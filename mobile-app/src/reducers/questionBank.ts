import { createReducer } from "@reduxjs/toolkit";
import { setQuestionBank } from "constants/actions";
import { QuestionBank } from "types/QuestionBank";

export default createReducer<QuestionBank>({ entries: {} }, (builder) =>
  builder.addCase(setQuestionBank, (state, { payload }) => ({
    entries: {
      ...state.entries,
      ...payload,
    },
  }))
);
