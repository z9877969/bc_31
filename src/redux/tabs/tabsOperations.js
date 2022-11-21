import { createAsyncThunk } from "@reduxjs/toolkit";
import { addColumnApi } from "../../utils/api";

export const addColumn = createAsyncThunk(
  "tabs/add/column",
  async (data, { rejectWithValue }) => {
    try {
      const column = await addColumnApi(data);
      return column;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


