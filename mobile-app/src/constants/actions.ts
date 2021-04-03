import { createAction } from "@reduxjs/toolkit";
import { Question, QuestionId, AnswerId } from "types/questionBank";

const SET_QUESTIONNAIRE = "SET_QUESTIONNAIRE";
const SET_QUESTIONNAIRE_ANSWER = "SET_QUESTIONNAIRE_ANSWER";
const FINISH_QUESTIONNAIRE = "FINISH_QUESTIONNAIRE";

export const createQuestionnaire = createAction<{ questions: Question[] }>(
  SET_QUESTIONNAIRE
);

export const setQuestionnaireAnswer = createAction<{
  questionId: QuestionId;
  answerId: AnswerId;
}>(SET_QUESTIONNAIRE_ANSWER);

export const finishQuestionnaire = createAction<{
  questions: Question[];
}>(FINISH_QUESTIONNAIRE);
