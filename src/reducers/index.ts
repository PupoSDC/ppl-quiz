import questionnaire, { QuestionnaireState } from "reducers/questionnaire";

export type EnhancedRootState = QuestionnaireState;

export const rootReducer = questionnaire;
