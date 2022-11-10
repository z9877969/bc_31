import {
  TODO_ADD,
  TODO_CHANGE_FILTER,
  TODO_REMOVE,
  TODO_UPDATE,
} from "./todoConstants";

export const addTodo = (newTodo) => ({
  type: TODO_ADD,
  payload: newTodo,
});

export const removeTodo = (id) => ({
  type: TODO_REMOVE,
  payload: id,
});

export const updateTodo = (id) => ({
  type: TODO_UPDATE,
  payload: id,
});

export const changeFilter = (value) => ({
  type: TODO_CHANGE_FILTER,
  payload: value,
});
