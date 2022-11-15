import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../utils/firebaseApi";

export const addTodo = createAsyncThunk("todo/add", async (data, thunkApi) => {
  // dispatch({type: "todo/add/pending"})
  try {
    const todo = await addTodoApi(data);
    return todo; // {type: "todo/add/fulfilled", payload: todo}
  } catch (error) {
    return thunkApi.rejectWithValue(error.message); // {type: "todo/add/rejected", payload: error.message}
  }
}); // {type: "todo/add/pending"} | {type: "todo/add/fulfilled"} | {type: "todo/add/rejected"}

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, { rejectWithValue }) => {
    try {
      const todo = await getTodoApi();
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
  async (id, { rejectWithValue }) => {
    try {
      await removeTodoApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const updateStatusTodo = (id, status) => (dispatch) => {
//   dispatch(updateTodoStatusPending());

//   updateTodoStatusApi(id, status)
//     .then((data) => dispatch(updateTodoStatusFullfield(data)))
//     .catch((err) => dispatch(updateTodoStatusRejected(err.message)));
// };
export const updateStatusTodo = createAsyncThunk(
  "todo/updateStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const data = await updateTodoStatusApi(id, status);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
