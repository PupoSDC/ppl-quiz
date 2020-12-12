import { createReducer } from "@reduxjs/toolkit";
import { startNewTest, setTestAnswer } from "constants/actions";
import { Question, Questionnaire } from "types/Questionnaire";

export default createReducer<Questionnaire>(
  {
    questions: [],
  },
  (builder) =>
    builder
      .addCase(startNewTest, (state, { payload }) => ({
        ...state,
        ...payload,
      }))
      .addCase(
        setTestAnswer,
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
);
