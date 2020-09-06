import { createAction } from "@reduxjs/toolkit";
import { Question } from "types/Questionnaire";

const SET_QUESTIONNAIRE = "SET_QUESTIONNAIRE";

export const createQuestionnaire = createAction<{ questions: Question[] }>(
  SET_QUESTIONNAIRE
);
