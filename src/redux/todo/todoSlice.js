import { createSlice } from "@reduxjs/toolkit";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null, // error
  },
  reducers: {
    addTodoPending: handlePending,
    addTodoFullfield(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    addTodoRejected: handleRejected,
    getTodoPending: handlePending,
    getTodoFullfield(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    getTodoRejected: handleRejected,
    removeTodoPending: handlePending,
    removeTodoFullfield(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((el) => el.id !== payload);
    },
    removeTodoRejected: handleRejected,
    updateTodoStatusPending: handlePending,
    updateTodoStatusFullfield(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const itemIdx = state.items.findIndex((el) => el.id === payload.id);
      const item = state.items[itemIdx];
      item.isDone = payload.isDone;
      state.items[itemIdx] = item;
    },
    updateTodoStatusRejected: handleRejected,
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const {
  changeFilter,
  addTodoPending,
  addTodoFullfield,
  addTodoRejected,
  getTodoPending,
  getTodoFullfield,
  getTodoRejected,
  removeTodoPending,
  removeTodoFullfield,
  removeTodoRejected,
  updateTodoStatusPending,
  updateTodoStatusFullfield,
  updateTodoStatusRejected,
} = todoSlice.actions;
export default todoSlice.reducer;
