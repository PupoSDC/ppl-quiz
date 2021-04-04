import { createReducer } from "@reduxjs/toolkit";
import questions from "assets/questions";
import {
  resetCurrentTest,
  setCurrentTest,
  setCurrentTestAnswer,
  setCurrentTestFinished,
} from "constants/Actions";
import { Test } from "types/test";

export type CurrentTestStore = Test;

export const currentTestReducer = createReducer<CurrentTestStore>(
  {
    questions: [],
    finished: false,
  },
  (builder) =>
    builder
      .addCase(setCurrentTest, (_, { payload: { questions } }) => ({
        questions: questions.map((q, index) => ({
          ...q,
          index,
          selected: undefined,
        })),
        finished: false,
      }))
      .addCase(
        setCurrentTestAnswer,
        ({ questions, ...state }, { payload: { questionId, answerId } }) => ({
          ...state,
          questions: questions.map((question) =>
            question.id !== questionId
              ? question
              : {
                  ...question,
                  selected: answerId,
                }
          ),
        })
      )
      .addCase(setCurrentTestFinished, (state) => ({
        ...state,
        finished: true,
      }))
      .addCase(resetCurrentTest, () => ({
        questions: [],
        finished: false,
      }))
);
