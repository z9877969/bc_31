import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { todo } from "../../data/todo";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: todo,
    filter: "all",
  },
  reducers: {
    add: {
      reducer: (state, { payload }) => {
        //   return { ...state, items: [...state.items, payload] };
        state.items.push(payload);
      },
      prepare: (data) => {
        console.log("data :>> ", data);
        return {
          payload: { ...data, isDone: false, id: uuidv4() },
        };
      },
    },
    remove(state, { payload }) {
      state.items = state.items.filter((el) => el.id !== payload);
    },
    updateStatus(state, { payload }) {
      const itemIdx = state.items.findIndex((el) => el.id === payload);
      const item = state.items[itemIdx];
      item.isDone = !item.isDone;
      state.items[itemIdx] = item;
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

console.log("todoSlice :>> ", todoSlice);

export const { add, remove, updateStatus, changeFilter } = todoSlice.actions;
export default todoSlice.reducer;
