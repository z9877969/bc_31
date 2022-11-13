import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContacts = createAsyncThunk(
  "contacts/get",
  async (_, thunkApi) => {
    try {
      const data = fetch();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
        const contacts = getState().contacts;
      if (!contacts.length) {
        return false;
      }
      return true;
    },
  }
);
