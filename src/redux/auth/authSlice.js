import { createSlice } from "@reduxjs/toolkit";
import { getCurUser, loginUser, registerUser } from "./authOperations";

const initialState = {
  email: null,
  idToken: null,
  localId: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut() {
      return initialState;
    },
  },
  extraReducers: {
    [registerUser.pending]: handlePending,
    [registerUser.rejected]: handleRejected,
    [loginUser.pending]: handlePending,
    [loginUser.rejected]: handleRejected,
    [getCurUser.pending]: handlePending,
    [getCurUser.rejected]: handleRejected,
    [registerUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
    },
    [getCurUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
    },
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
