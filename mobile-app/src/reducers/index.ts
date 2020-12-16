import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import currentTest from "./currentTest";
import questionBank from "./questionBank";
import { Questionnaire } from "types/Questionnaire";
import { QuestionBank } from "types/QuestionBank";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

type EnhancedRootState = {
  currentTest: Questionnaire;
  questionBank: QuestionBank;
};

const persistConfig = {
  key: "confi",
  version: 1,
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  currentTest,
  questionBank,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

// Augument the the redux state type
declare module "react-redux" {
  interface DefaultRootState extends EnhancedRootState {}
}
