import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import counterReducer from "./counter/counterReducer";
import todoReducer from './todo/todoReducer';

// const reducer = (state = { a: 21, b: true, c: [false] }, action) => {
//   const newState = { ...state, a: 52 };
//   return newState;
// };

// const reducerA = (state = 21, action) => {
//   return 52;
// };
// const reducerB = (state = true, action) => {
//   return state;
// };
// const reducerArr = (state = [], action) => {
//   return state;
// };
// const reducerIsDone = (state = false, action) => {
//   return state;
// };
// const reducerC = combineReducers({
//   arr: reducerArr,
//   isDone: reducerIsDone,
// });

const rootReducer = combineReducers({
  //   a: reducerA,
  //   b: reducerB,
  //   c: reducerC,
  counter: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer());
