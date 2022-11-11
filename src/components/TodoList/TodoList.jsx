import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";
import s from "./TodoList.module.scss";
import { getTodo, getTodoFilter } from "../../redux/todo/todoSelectors";

const TodoList = () => {
  const todo = useSelector(getTodo);
  const filter = useSelector(getTodoFilter);

  const filterTodo = () => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  };

  const filteredTodo = filterTodo();

  return (
    <ul className={s.container}>
      {filteredTodo.map((item) => (
        <TodoListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default memo(TodoList);
