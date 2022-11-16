import { configureStore } from "@reduxjs/toolkit";
import transactions from "../redux/transactions/transactionsSlice";

export const store = configureStore({
  reducer: {
    transactions,
  },
});
