import { createSlice } from "@reduxjs/toolkit";
import { transactions } from "../../data/transactions";
import {
  addIncomeTransaction,
  addExpenseTransaction,
  getIncomeTransactions,
  getExpenseTransactions,
} from "./transactionsOperations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    income: [],
    expense: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addIncomeTransaction.pending]: handlePending,
    [addIncomeTransaction.rejected]: handleRejected,
    [addExpenseTransaction.pending]: handlePending,
    [addExpenseTransaction.rejected]: handleRejected,
    [getIncomeTransactions.pending]: handlePending,
    [getIncomeTransactions.rejected]: handleRejected,
    [getExpenseTransactions.pending]: handlePending,
    [getExpenseTransactions.rejected]: handleRejected,
    [addIncomeTransaction.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.income.push(payload);
    },
    [addExpenseTransaction.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.expense.push(payload);
    },
    [getIncomeTransactions.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.income = payload;
    },
    [getExpenseTransactions.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.expense = payload;
    },
  },
});

export default transactionsSlice.reducer;
