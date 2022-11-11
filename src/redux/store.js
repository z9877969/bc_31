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

const todoPersistConfig = {
  key: "todo",
  version: 1,
  storage,
  whitelist: ["items"]
};

const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: persistedTodoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV !== "production",
  // preloadedState: {
  //   counter: 100,
  //   todo: {
  //     items: [],
  //     filter: "all",
  //   },
  // },
});

export const persistor = persistStore(store);
