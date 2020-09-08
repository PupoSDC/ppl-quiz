import { createReducer } from "@reduxjs/toolkit";
import { createQuestionnaire, setQuestionnaireAnswer } from "constants/Actions";
import { Question } from "types/Questionnaire";

export type QuestionnaireState = {
  questions: Question[];
};

export default createReducer<QuestionnaireState>(
  {
    questions: [],
  },
  (builder) =>
    builder
      .addCase(createQuestionnaire, (state, { payload }) => ({
        ...state,
        ...payload,
      }))
      .addCase(
        setQuestionnaireAnswer,
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
