import PropTypes from "prop-types";
import TodoListItem from "../TodoListItem/TodoListItem";
import s from "./TodoList.module.scss";

const TodoList = ({ todo, removeTodo, updateStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map((item) => (
        <TodoListItem
          key={item.id}
          {...item}
          removeTodo={removeTodo}
          updateStatus={updateStatus}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
