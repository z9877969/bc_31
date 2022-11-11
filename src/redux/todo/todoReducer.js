import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { todo } from "../../data/todo";
import { addTodo, changeFilter, removeTodo, updateTodo } from "./todoActions";

// const itemsReducer = (state = todo, action) => {
//   switch (action.type) {
//     case TODO_ADD:
//       return [...state, action.payload];
//     case TODO_REMOVE:
//       return state.filter((el) => el.id !== action.payload);
//     case TODO_UPDATE:
//       return state.map((el) =>
//         el.id !== action.payload ? el : { ...el, isDone: !el.isDone }
//       );
//     default:
//       return state;
//   }
// };
const itemsReducer = createReducer(todo, {
  [addTodo]: (state, { payload }) => [...state, payload],
  [removeTodo]: (state, { payload }) => state.filter((el) => el.id !== payload),
  [updateTodo]: (state, { payload }) =>
    state.map((el) => (el.id !== payload ? el : { ...el, isDone: !el.isDone })),
});

// const filterReducer = (state = "all", { type, payload }) => {
//   switch (type) {
//     case TODO_CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
const filterReducer = createReducer("all", {
  [changeFilter]: (_, { payload }) => payload,
});

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;
