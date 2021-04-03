import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import questionnaire, { QuestionnaireState } from "./questionnaire";
import statistics, { GlobalTestStatistics } from "./statistics";
import testHistory, { TestHistory } from "./testHistory";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type EnhancedRootState = {
  questionnaire: QuestionnaireState;
  statistics: GlobalTestStatistics;
  testHistory: TestHistory;
};

export const rootReducer = combineReducers({
  questionnaire,
  statistics,
  testHistory,
});

const persistConfig = {
  key: "confi",
  version: 1,
  storage: AsyncStorage,
};

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
