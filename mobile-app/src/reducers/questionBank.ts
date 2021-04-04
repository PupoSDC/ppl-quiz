import { createReducer } from "@reduxjs/toolkit";
import { setQuestionBanks } from "constants/actions";
import { QuestionBlock } from "types/questionBank";

export type QuestionBankStore = Record<string, QuestionBlock>;

export const questionBankReducer = createReducer<QuestionBankStore>(
  {},
  (builder) =>
    builder.addCase(setQuestionBanks, (_, { payload }) =>
      payload.questionBlocks.reduce(
        (banks, block) => ({
          ...banks,
          [block.id]: block,
        }),
        {}
      )
    )
);
