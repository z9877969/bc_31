export const getTransactions = (transType) => (state) =>
  state.transactions[transType];
