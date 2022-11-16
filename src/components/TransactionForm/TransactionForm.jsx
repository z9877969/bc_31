import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import s from "./TransactionForm.module.scss";

const TransactionForm = ({ form, handleChange, addTransaction, resetForm }) => {
  const navigate = useNavigate();

  const { transType, date, time, sum, category, currency, comment } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction();
    resetForm();
  };

  return (
    <section>
      <Container>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            <span className={s["label-title"]}>Доходи</span>
            <input
              type="radio"
              name="transType"
              value="income"
              checked={transType === "income"}
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            <span className={s["label-title"]}>Витрати</span>
            <input
              type="radio"
              name="transType"
              value="expense"
              checked={transType === "expense"}
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            <span className={s["label-title"]}>Дата</span>
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            <span className={s["label-title"]}>Час</span>
            <input
              type="time"
              name="time"
              value={time}
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            <span className={s["label-title"]}>Категорія</span>
            <input
              type="button"
              name="category"
              value={category}
              onClick={() => navigate("categories")}
            />
          </label>
          <label className={s.label}>
            <span className={s["label-title"]}>Сума</span>
            <input
              type="text"
              name="sum"
              value={sum}
              placeholder="Вкажіть суму"
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            <span className={s["label-title"]}>Валюта</span>
            <input
              type="button"
              name="currency"
              value={currency}
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            <span className={s["label-title"]}>Коментар</span>
            <input
              type="text"
              name="comment"
              value={comment}
              placeholder="Коментар..."
              onChange={handleChange}
            />
          </label>
          <button type="submit" className={s["btn-form"]}>
            Додати
          </button>
        </form>
      </Container>
    </section>
  );
};

export default TransactionForm;
