import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import TransactionsList from "../components/TransactionsList/TransactionsList";
import {
  getExpenseTransactions,
  getIncomeTransactions,
} from "../redux/transactions/transactionsOperations";
import { getTransactions } from "../redux/transactions/transactionsSelector";

const HistoryPage = () => {
  const dispatch = useDispatch();

  const { transType } = useParams(); // income | expense
  const cb = getTransactions(transType);
  const transactions = useSelector(cb); // state => state.transactions[transType]

  console.log(transactions);

  useEffect(() => {
    transType === "income" && dispatch(getIncomeTransactions(transType));
    transType === "expense" && dispatch(getExpenseTransactions(transType));
  }, [dispatch, transType]);

  return (
    <>
      <Header title={"HistoryPage - " + transType} withBtn />
      <TransactionsList transactions={transactions} />
    </>
  );
};

export default HistoryPage;
