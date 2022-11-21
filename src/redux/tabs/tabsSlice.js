import { createSlice } from "@reduxjs/toolkit";
import { addColumn } from "./tabsOperations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = true;
  state.error = payload;
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    isLoading: false,
    error: null,
    columns: [
      {
        id: 1,
        title: "Title-1",
        tasksList: [
          {
            id: 1.1,
            descr: "Lorem ipsum dolor sit amet.",
          },
          {
            id: 1.2,
            descr: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          },

          {
            id: 1.3,
            descr:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, culpa?",
          },
        ],
      },
      {
        id: 2,
        title: "Title-2",
        tasksList: [
          {
            id: 2.1,
            descr: "Lorem ipsum dolor sit amet.",
          },
          {
            id: 2.2,
            descr: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          },

          {
            id: 2.3,
            descr:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, culpa?",
          },
        ],
      },
    ],
  },
  extraReducers: {
    [addColumn.pending]: handlePending,
    [addColumn.rejected]: handleRejected,
    [addColumn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.columns.push(payload);
    },
  },
});

export default tabsSlice.reducer;
