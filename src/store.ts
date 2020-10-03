import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import { rootReducer, EnhancedRootState } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);
export default store;

// Augument the the redux state type
declare module "react-redux" {
  interface DefaultRootState extends EnhancedRootState {}
}
