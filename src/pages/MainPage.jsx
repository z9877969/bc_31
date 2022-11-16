import { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import {
  addExpenseTransaction,
  addIncomeTransaction,
} from "../redux/transactions/transactionsOperations";

const initialFormState = {
  transType: "expense",
  date: "",
  time: "",
  category: "Різне",
  sum: "",
  currency: "UAH",
  comment: "",
};

const MainPage = () => {
  const dispatch = useDispatch();
  const { transType } = useParams();

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setForm(initialFormState);

  const addTransaction = () => {
    transType === "income" &&
      dispatch(addIncomeTransaction({ transType, transaction: form }));
    transType === "expense" &&
      dispatch(addExpenseTransaction({ transType, transaction: form }));
  };

  const setCategory = (category) => setForm((prev) => ({ ...prev, category }));

  return (
    <Routes>
      <Route
        index
        element={
          <>
            <Header title={"Журнал витрат"} />
            <TransactionForm
              form={form}
              handleChange={handleChange}
              addTransaction={addTransaction}
              resetForm={resetForm}
            />
            <MainNavigation />
          </>
        }
      />
      <Route
        path="categories"
        element={<Categories setCategory={setCategory} />}
      />
    </Routes>
  );
};

export default MainPage;
