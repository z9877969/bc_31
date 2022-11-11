import { createReducer } from "@reduxjs/toolkit";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "./counterActions";

const initialState = 25;

const counterReducer = createReducer(initialState, {
  [counterDecrement]: (state, action) => state - action.payload,
  [counterIncrement]: (state, action) => state + action.payload,
  [counterReset]: () => initialState,
});

export default counterReducer;
