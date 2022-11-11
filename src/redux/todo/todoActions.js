import { createAction } from "@reduxjs/toolkit";

// export const addTodo = (newTodo) => ({
//   type: TODO_ADD,
//   payload: newTodo,
// });
export const addTodo = createAction("todo/add");

// export const removeTodo = (id) => ({
//   type: TODO_REMOVE,
//   payload: id,
// });
export const removeTodo = createAction("todo/remove");

// export const updateTodo = (id) => ({
//   type: TODO_UPDATE,
//   payload: id,
// });
export const updateTodo = createAction("todo/update");

// export const changeFilter = (value) => ({
//   type: TODO_CHANGE_FILTER,
//   payload: value,
// });
export const changeFilter = createAction("todo/filter/change");
