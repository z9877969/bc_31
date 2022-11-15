import { memo } from "react";
import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";
import s from "./TodoList.module.scss";
import {
  getFilteredTodo,
  getTodo,
  getTodoFilter,
} from "../../redux/todo/todoSelectors";
import { useState } from "react";

const List = ({ items }) => {
  return (
    <ul className={s.container}>
      {items.map((item) => (
        <TodoListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

const TodoList = () => {
  const filteredTodo = useSelector(getFilteredTodo); // array

  return (
    <>
      <List items={filteredTodo} />;
    </>
  );
};

export default memo(TodoList);
