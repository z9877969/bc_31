import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 100,
  reducers: {
    increment: (state, { payload }) => {
      return state + payload;
    },
    decrement: (state, { payload }) => {
      return state - payload;
    },
    reset: () => 100,
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
