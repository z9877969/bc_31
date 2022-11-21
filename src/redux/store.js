import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";
import tabs from "./tabs/tabsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    tabs,
  },
});
