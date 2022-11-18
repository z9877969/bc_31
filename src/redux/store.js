import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";
import auth from "./auth/authSlice";

const authPersistConfigs = {
  key: "token",
  storage,
  whitelist: ["idToken"],
};

const authPersistedReducer = persistReducer(authPersistConfigs, auth);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    counter: counterReducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
