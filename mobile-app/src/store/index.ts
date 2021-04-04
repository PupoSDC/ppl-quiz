import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { questionBankReducer, QuestionBankStore } from "reducers/questionBank";
import { currentTestReducer, CurrentTestStore } from "reducers/currentTest";
import { statisticsReducer, StatisticsStore } from "reducers/statistics";

export type EnhancedRootState = {
  questionBank: QuestionBankStore;
  currentTest: CurrentTestStore;
  statistics: StatisticsStore;
};

export const rootReducer = combineReducers({
  questionBank: questionBankReducer,
  currentTest: currentTestReducer,
  statistics: statisticsReducer,
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
