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
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

type EnhancedRootState = {
  currentTest: Questionnaire;
  questionBank: QuestionBank;
};

export const rootReducer = combineReducers({
  currentTest,
  questionBank: persistReducer(
    {
      key: "questionBank",
      version: 1,
      storage: AsyncStorage,
    },
    questionBank
  ),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

// Augument the the redux state type
declare module "react-redux" {
  interface DefaultRootState extends EnhancedRootState {}
}
