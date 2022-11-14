import clsx from "clsx";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../redux/todo/todoSlice";
import s from "../TodoList/TodoList.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { removeTodo, updateStatusTodo } from "../../redux/todo/todoOperations";



const TodoListItem = ({ descr, id, date, isDone }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.toDoItem}>
      <p className={s.date}>{date}</p>

      <p className={clsx(s.descr, isDone && s.isDone)}>{descr}</p>
      <label className={s.status}>
        <input
          type="checkbox"
          onChange={() =>
            dispatch(updateStatusTodo(id, isDone))
          }
          name="status"
          checked={isDone}
        />
        Done
      </label>
      <button onClick={() => dispatch(removeTodo(id))} className={s.todoBtn}>
        <svg className={s.icon}>
          <use href={sprite + "#icon-trash"}></use>
        </svg>
      </button>
    </li>
  );
};

export default TodoListItem;
