import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurUserApi,
  loginUserApi,
  refreshTokenApi,
  registerUserApi,
} from "../../utils/firebaseApi";
import { errorHandler } from "../error/errorHandler";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (form, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(form);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (form, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(form);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurUser = createAsyncThunk(
  "auth/getCurUser",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { idToken } = getState().auth;
    try {
      const data = await getCurUserApi(idToken); // idToken invalid -> 400
      return data;
    } catch (error) {
      // error.code 400
      dispatch(
        errorHandler({
          error,
          cb: getCurUser,
        })
      );
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { idToken } = getState().auth;
      return Boolean(idToken);
    },
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (cb, { getState, rejectWithValue, dispatch }) => {
    const { refreshToken } = getState().auth;
    try {
      const tokens = await refreshTokenApi(refreshToken);
      setTimeout(() => {
        dispatch(cb()); // () => addTodo(data)
      }, 0);
      return tokens; // tokens -> reducer -> state up tokens -> dispatch(getCurUser())
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
