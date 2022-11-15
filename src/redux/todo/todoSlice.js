import { createReducer, createSlice } from "@reduxjs/toolkit";
import { increment } from "../counter/counterSlice";
import {
  addTodo,
  getTodo,
  removeTodo,
  updateStatusTodo,
} from "./todoOperations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const setActionsWithHandlers = (operation) => ({
  [operation.pending]: handlePending,
  [operation.rejected]: handleRejected,
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null, // error
  },
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    ...setActionsWithHandlers(addTodo),
    [getTodo.pending]: handlePending,
    [getTodo.rejected]: handleRejected,
    [removeTodo.pending]: handlePending,
    [removeTodo.rejected]: handleRejected,
    [updateStatusTodo.pending]: handlePending,
    [updateStatusTodo.rejected]: handleRejected,
    [addTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [getTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [removeTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((el) => el.id !== payload);
    },
    [updateStatusTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      const itemIdx = state.items.findIndex((el) => el.id === payload.id);
      const item = state.items[itemIdx];
      item.isDone = payload.isDone;
      state.items[itemIdx] = item;
    },
  },
});

export const { changeFilter } = todoSlice.actions;
export default todoSlice.reducer;
