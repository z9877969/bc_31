import { memo } from "react";
import PropTypes from "prop-types";
import TodoListItem from "../TodoListItem/TodoListItem";
import s from "./TodoList.module.scss";

const TodoList = ({ todo, removeTodo, updateStatus }) => {
  console.log("TodoList");

  return (
    <ul className={s.container}>
      {todo.map((item, idx) => (
        <TodoListItem
          key={item.id}
          {...item}
          idx={idx}
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

export default memo(TodoList);
