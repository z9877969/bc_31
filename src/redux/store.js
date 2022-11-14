import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";
import logger from "redux-logger";

// const ownLogger1 = (store) => {
//   return (next) => {
//     return (action) => {
//       console.group("action ", action.type);
//       const prevState = store.getState();
//       console.log("prevState ", prevState);
//       console.log("action :>> ", action);
//       next(action); // action -> reducer -> update state
//       const nextState = store.getState();
//       console.log("nextState", nextState);
//       console.groupEnd();
//     };
//   };
// };

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch, store.getState);
    return;
  }
  next(action);
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
  // middleware: [thunk],
  middleware: (gDM) => gDM().concat(logger),
});

// {
//   store, next,

//   thunk(store)(next)(action)
// }
