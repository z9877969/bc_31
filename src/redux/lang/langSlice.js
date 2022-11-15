import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: "en",
  reducers: {
    changeLang(state, { payload }) {
      return payload;
    },
  },
});

// const actionCreator = createAction("actionType1"); // actionCreator -> {type: "actionType1"}

// const langReducer = createReducer([], {
//   [actionCreator]: (state, action) => {
//     return state;
//   },
// });

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
