import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTransactionApi,
  getTransactionsApi,
} from "../../utiles/firebaseApi";

const conditionExistTransactions = (transType, { getState }) => {
  const transactions = getState().transactions;

  return !transactions[transType].length;
};

export const addIncomeTransaction = createAsyncThunk(
  "transaction/add/income",
  async ({ transaction, transType }, { rejectWithValue }) => {
    try {
      const data = await addTransactionApi(transaction, transType);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addExpenseTransaction = createAsyncThunk(
  "transaction/add/expense",
  async ({ transaction, transType }, { rejectWithValue }) => {
    try {
      const data = await addTransactionApi(transaction, transType);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getIncomeTransactions = createAsyncThunk(
  "transactions/get/income",
  async (transType, { rejectWithValue }) => {
    try {
      const transactions = await getTransactionsApi(transType);
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: conditionExistTransactions,
  }
);

export const getExpenseTransactions = createAsyncThunk(
  "transactions/get/expense",
  async (transType, { rejectWithValue }) => {
    try {
      const transactions = await getTransactionsApi(transType);
      return transactions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: conditionExistTransactions,
  }
);
