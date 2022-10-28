import PropTypes from "prop-types";
import clsx from "clsx";
import s from "./TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const TodoList = ({ todo, removeTodo, updateStatus }) => {
  // setState({a: 21, d: "qwe"})
  return (
    <ul className={s.container}>
      {todo.map(({ descr, id, date, isDone }) => (
        <li key={id} className={s.toDoItem}>
          <p className={s.date}>{date}</p>
          <p className={clsx(s.descr, isDone && s.isDone)}>{descr}</p>
          <label className={s.status}>
            <input
              type="checkbox"
              onChange={() => updateStatus(id)}
              name="status"
              checked={isDone}
            />
            Done
          </label>
          <button onClick={(event) => removeTodo(id)} className={s.todoBtn}>
            <svg className={s.icon}>
              <use href={sprite + "#icon-trash"}></use>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
