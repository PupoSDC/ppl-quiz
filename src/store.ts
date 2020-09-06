import questionnaire, { QuestionnaireState } from "reducers/questionnaire";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: questionnaire,
});

// Augument the the redux state type
declare module "react-redux" {
  interface DefaultRootState extends QuestionnaireState {}
}
