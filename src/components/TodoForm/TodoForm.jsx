import { memo, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import s from "./TodoForm.module.scss";
import { useState } from "react";
import { ModalContext } from "../../context/ModalContext";

const initialFormState = {
  date: moment().format("YYYY-MM-DD"),
  descr: "",
  priority: "",
};

const TodoForm = ({ addTodo }) => {
  const setModalComponent = useContext(ModalContext);
  const [form, setForm] = useState(initialFormState);
  const { date, descr, priority } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...form, isDone: false, id: uuidv4() });
  };

  console.log("TodoForm");

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          onChange={handleChange}
          name="date"
          type="date"
          value={date}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={descr}
          onChange={handleChange}
        />
      </label>

      <div className={s.labelWrapper}>
        <div className={s.radioWrapper}>
          <input
            id="formRadioLow"
            className={s.input}
            type="radio"
            name="priority"
            value="low"
            checked={priority === "low"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
            Low
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioMedium"
            className={s.input}
            type="radio"
            name="priority"
            value="medium"
            checked={priority === "medium"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioMedium">
            Medium
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioHigh"
            className={s.input}
            type="radio"
            name="priority"
            value="high"
            checked={priority === "high"}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
            High
          </label>
        </div>
      </div>
      <button className={s.submit} type="submit">
        Ok
      </button>
      <button
        className={s.submit}
        type="button"
        onClick={() => setModalComponent(<TodoForm addTodo={addTodo} />)}
      >
        OpenModal
      </button>
    </form>
  );
};

export default memo(TodoForm);
