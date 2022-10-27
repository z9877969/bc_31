import PropTypes from "prop-types";
import clsx from "clsx";
import s from "./TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const TodoList = ({ todo }) => {
  return (
    <ul className={s.container}>
      {todo.map(({ descr, id, date }) => (
        <li key={id} className={s.toDoItem}>
          <p className={s.date}>{date}</p>
          <p className={clsx(s.descr, true && s.isDone)}>{descr}</p>
          <label className={s.status}>
            <input type="checkbox" name="status" />
            Done
          </label>
          <button className={s.todoBtn}>
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
