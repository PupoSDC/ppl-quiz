import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { rootReducer, EnhancedRootState } from "reducers";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;

// Augument the the redux state type
declare module "react-redux" {
  interface DefaultRootState extends EnhancedRootState {}
}
