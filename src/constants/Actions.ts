import { createAction } from "@reduxjs/toolkit";
import { Question, QuestionId, AnswerId } from "types/Questionnaire";

const SET_QUESTIONNAIRE = "SET_QUESTIONNAIRE";
const SET_QUESTIONNAIRE_ANSWER = "SET_QUESTIONNAIRE_ANSWER";
const ADD_QUESTIONNARE_TO_STATISTICS = "ADD_QUESTIONNARE_TO_STATISTICS";

export const createQuestionnaire = createAction<{ questions: Question[] }>(
  SET_QUESTIONNAIRE
);

export const setQuestionnaireAnswer = createAction<{
  questionId: QuestionId;
  answerId: AnswerId;
}>(SET_QUESTIONNAIRE_ANSWER);

export const addQuestionnareToStatistics = createAction<{
  questions: Question[];
}>(ADD_QUESTIONNARE_TO_STATISTICS);
