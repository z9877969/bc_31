import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../utils/firebaseApi";

export const addTodo = createAsyncThunk("todo/add", async (data, thunkApi) => {
  const { idToken, localId } = thunkApi.getState().auth;

  try {
    const todo = await addTodoApi({ form: data, localId, idToken });
    return todo;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, { rejectWithValue, getState }) => {
    const { idToken, localId } = getState().auth;
    try {
      const todo = await getTodoApi({ localId, idToken });
      return todo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { items } = getState().todo;

      if (items.length) {
        return false;
      }
      return true;
    },
  }
);

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, { rejectWithValue, getState }) => {
    const { idToken, localId } = getState().auth;
    try {
      await removeTodoApi({ id, localId, idToken });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateStatusTodo = createAsyncThunk(
  "todo/updateStatus",
  async ({ id, status }, { rejectWithValue, getState }) => {
    const { idToken, localId } = getState().auth;
    try {
      const data = await updateTodoStatusApi({ localId, id, status, idToken });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
